import express from "express"
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import router from "./routes/Auth.js";
const app = express()
app.use(express.json());
dotenv.config();
connectDB(); 
app.use('/api/auth', router);
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