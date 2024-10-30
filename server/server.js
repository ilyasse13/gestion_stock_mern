import express from "express"
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectDB from "./config/db.js";

import path from 'path';
import { fileURLToPath } from 'url';

import cookieParser from "cookie-parser";
import router from "./routes/AuthRoutes.js";
import Productrouter from "./routes/ProductsRoutes.js";
import  UserRoutes  from "./routes/UserRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
app.use(cookieParser()); // allows us to parse incoming cookies
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow credentials if needed
};
app.use(cors(corsOptions));

app.use(express.json());

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//connection with the database
connectDB(); 

// Use routes
app.use('/api/auth', router);
app.use('/api',Productrouter);
app.use('/api',UserRoutes)


const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe Sharing Platform API');
  });
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!', error: err.message });
  });
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });