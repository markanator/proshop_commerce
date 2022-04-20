import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    });

    console.log('Connection to mongoDB:', conn.connection.host);
  } catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }
};

export default connectDb;
