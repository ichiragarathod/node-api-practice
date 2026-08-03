import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes"; 
import authRoutes from "./routes/authRoutes";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

// Middleware — REQUIRED for req.body to work
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes); 

// Connect to MongoDB, then start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });