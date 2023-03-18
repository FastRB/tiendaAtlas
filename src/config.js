import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tienda"

export const PORT = process.env.PORT || 5000;
