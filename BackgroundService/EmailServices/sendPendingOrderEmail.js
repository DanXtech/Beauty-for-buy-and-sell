import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Order from "../models/order.model.js";
import User from "../models/user.model.js";
dotenv.config();


const sendPendingOrderEmail = async() => {
const orders = await Order.find({status: 0});
if(orders.lenght > 0) {
    for(let order of orders){
        ejs.renderFile(
            "templates/pendingorder.ejs",
            {
                name: order.name,
                products: order.products
            } ,
           async (err, data) => {
                let messageOptions = {
                    from: process.env.EMAIL_USER,
                    to: order.email,
                    subject: "Your order has been placed",
                    html: data,
                };

                try {
                    await sendMail(messageOptions) 
                    await Order.findByIdAndUpdate(order._id, {$set: {status: 1}})
                } catch (error) {
                    console.log(error)
                }

            }
        )
    }
}
}

export default sendPendingOrderEmail