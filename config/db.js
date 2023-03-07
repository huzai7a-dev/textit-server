import mongoose from "mongoose";

const connectToDb = async () => {
    mongoose.set('strictQuery', false);
    try {
       const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
       })
       console.log(`Connected to DB ${conn.connection.host}`)
   } catch (error) {
       console.log(`Error: ${error.message}`)
       process.exit()
   }
}

export default connectToDb