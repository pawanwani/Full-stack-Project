import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique : true
    },
    subtitle: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tags: [
      {type: String,
      required: true,}
    ],
  },
  { timestamps: true }
); //passing a constructor here

const Blogs = mongoose.model("blogs", BlogSchema);
export default Blogs;
