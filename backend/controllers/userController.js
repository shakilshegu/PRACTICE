import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

const registerUser = asyncHandler(async (req, res) =>  {
  const {name,email,password}  = req.body
  const userExist = await User.findOne({email})
  if(userExist){
    res.status(400);
    throw new Error('User already exists')
  }
  const user = await User.create({
    name,
    email,
    password
  });
  if(user){
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email
    })
  }else{
    res.status(400);
    throw new Error('Invalid user data')
  }
  res.status(200).json({ message: "Register User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " User Profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update User Profile" });
});


export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
