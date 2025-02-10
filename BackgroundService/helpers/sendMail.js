import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config();


function createTransporter(config){
    const transporter = nodemailer.createTransport(config);
    return transporter;
}
let configurations = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    requireTls: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

const sendMail = async () => {
    const transporter = createTransporter(configurations);
    await transporter.verify();

    transporter.sendMail(messageOption, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log(info.response);
    })

}

export default sendMail