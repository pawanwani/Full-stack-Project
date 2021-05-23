import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
        data: Buffer,
        contentType: String
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
module.exports = User;
