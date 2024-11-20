// config/db.js
import { connect } from 'mongoose';
const connectDB = async () => {
  try {
    await connect("mongodb+srv://Omondi:Omondi23@cluster0.kdulf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
