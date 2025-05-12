import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URL;

  if (!mongoURI) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    // Assign the connection object to a variable
    const conn = await mongoose.connect(mongoURI);
    console.log(`✅ Database Connected`);
  } catch (error) {
    console.error(`❌ Database Connection Failed: ${error.message}`);
    process.exit(1);
  }
};
