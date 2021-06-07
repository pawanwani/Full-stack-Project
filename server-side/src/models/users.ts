import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username : {
      type : String,
      unique : true,
      required : true
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
        type : String,
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogs",
      },
    ],
  },
  { timestamps: true }
); //passing a constructor here

const User = mongoose.model("user", UserSchema);
export default User;
