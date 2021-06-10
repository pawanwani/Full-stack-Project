import axios from "axios";

export const GetPost = async () => {
  const output = await axios.get(`http://localhost:5000/api/blogs`);
};
