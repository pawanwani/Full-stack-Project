import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    body: {
      type: Number,
      required: true,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    image: {
        type: Buffer,
        contentType: String
    },
  },
  { timestamps: true }
); //passing a constructor here

const Blogs = mongoose.model("blogs", BlogSchema);
export default Blogs;
