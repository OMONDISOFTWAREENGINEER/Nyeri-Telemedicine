// app.js
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
connectDB();

//middleware
app.use(cookieParser());

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
