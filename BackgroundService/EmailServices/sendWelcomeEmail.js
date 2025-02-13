// import ejs from "ejs"
// import dotenv from "dotenv"
// import sendMail from "../helpers/sendMail.js"
// import User from "../models/user.model.js"
// dotenv.config()

// const sendWelcomeEmail = async () => {
//     // This service will check if user has status of zero
//    const users = await User.find({status:0});
//    if(users.length > 0) {
//     for(let user of users){
//         ejs.renderFile(
//             "templates/welcome.ejs",
//             {name: user.name},
//             async(err, data) => {

//                 let messageoptions={
//                     from: process.env.EMAIL,
//                     to: user.email,
//                     subject: "welcome to Beauty Bliss",
//                     html: data
//                 }

//                 try {
//                     await sendMail(messageoptions)
//                     // if successfully send the mail then you need to update the user
//                     await User.findByIdAndUpdate(user._id, {$set: {status: 1}});
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//         )
//     }
//    }
// }

// export default sendWelcomeEmail


import ejs from "ejs";
import dotenv from "dotenv";
import { promisify } from "util";
import sendMail from "../helpers/sendMail.js";
import User from "../models/user.model.js";

dotenv.config();

const renderFile = promisify(ejs.renderFile);

// Function to add delay (prevents Gmail rate limiting)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendWelcomeEmail = async () => {
    try {
        const users = await User.find({ status: 0 });

        if (users.length > 0) {
            for (let user of users) {
                try {
                    const emailContent = await renderFile("templates/welcome.ejs", { name: user.name });

                    const messageOptions = {
                        from: process.env.EMAIL_USER,
                        to: user.email,
                        subject: "Welcome to Beauty Bliss",
                        html: emailContent,
                    };

                    await sendMail(messageOptions);
                    await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });

                    await delay(5000); // Wait 5 seconds before sending the next email
                } catch (error) {
                    console.error("Error sending email to:", user.email, error);
                }
            }
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

export default sendWelcomeEmail;
