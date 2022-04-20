import * as mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);

    console.log('Connection to mongoDB:', conn.connection.host);
  } catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }
};

export default connectDb;
