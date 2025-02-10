import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import { errorHandler, notFound } from "./Middleware/error.middware.js";
import authRoute from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import bannerRoutes from "./routes/banner.route.js"
import userRoutes from "./routes/user.route.js"
import orderRoutes from "./routes/order.route.js"
const app = express();

//cors
app.use(cors());

//json body
app.use(express.json());

// cookie-parser
app.use(cookieParser());

// ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/banners", bannerRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes)


// Error middleWare
app.use(notFound)
app.use(errorHandler)

export default app;
