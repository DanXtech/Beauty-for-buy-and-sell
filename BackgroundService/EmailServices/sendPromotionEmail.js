import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Product from "../models/product.models.js";
import User from "../models/user.model.js";
dotenv.config();

const sendPromotionEmail = async() => {
const users = await User.find();
const products = await Product.aggregate([
    {$sample: {size: 5}}
])

for(let user of users) {
    ejs.renderFile(
        "templates/promotion.ejs",
        {
          products
        } ,
       async (err, data) => {
            let messageOptions = {
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: "Your weekly products.",
                html: data,
            };

            try {
                await sendMail(messageOptions) 
            } catch (error) {
                console.log(error)
            }

        }
    )
}
}
export default sendPromotionEmail()