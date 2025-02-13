
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function createTransporter(config) {
    return nodemailer.createTransport(config);
}

const configurations = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
};

const sendMail = async (messageOptions) => {
    try {
        const transporter = createTransporter(configurations);
        await transporter.verify();

        const info = await transporter.sendMail(messageOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Email sending error:", error);
    }
};

export default sendMail;

// import nodemailer from "nodemailer"
// import dotenv from "dotenv"
// dotenv.config();


// function createTransporter(config){
//     const transporter = nodemailer.createTransport(config);
//     return transporter;
// }

// let configurations = {
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 587,
//     requireTls: true,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     }
// }

// const sendMail = async (messageoption) => {
//     const transporter = createTransporter(configurations);
//     await transporter.verify();

    
//     await  transporter.sendMail(messageoption, (error, info) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log(info.response);
//     })

// }

// export default sendMail

