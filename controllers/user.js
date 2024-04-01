import { User } from "../models/User.js"

export const getAllUsers=async(req,res)=>{
  const users=await User.find({})
  console.log(req.query)

  res.json({
    success:true,
    users
  })
}
export const findUserById=async(req,res)=>{
  const {id}= req.params;
  // const user=await User.findOne({_id:id})
  const user=await User.findById(id)

  res.json({
    success:true,
    user
  })
}

export const createNewUser=async(req,res)=>{

  const {name,email,password} = req.body;
  console.log(req.body)

  await User.create({
    name,
    email,
    password
  })

  res.status(201).cookie("temp","lol").json({
    success:true,
    message:"registration successfull"
  })
}