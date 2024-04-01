import mongoose  from "mongoose";

export const connectDb=async()=>{
  await mongoose.connect(process.env.MONGO_URL,{
    dbName:"backendApis"
  })
  .then(()=>console.log("database connected"))
  .catch((error)=>console.log(error))

}