import mongoose from 'mongoose';

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('DB Connected')
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)//change e-commerce with shopflex
}



export default connectDB;