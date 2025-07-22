import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(` MongoDB connected successfully!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error('MongoDB CONNECTION FAILED:', error);
        process.exit(1); // Exit the process with failure Learn Documentation: https://nodejs.org/api/process.html#process_exit_code
    }
}
export default connectDB;