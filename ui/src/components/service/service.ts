import axios from "axios";

export const fetchdata = async () => {
  const res = axios.get("http://localhost:5000/api/questions/");
  return res;
};
