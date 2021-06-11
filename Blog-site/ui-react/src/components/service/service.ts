import axios from "axios";

export const fetchdata = async () => {
  const res = axios.get("http://localhost:5000/api/questions/");
  return res;
};

export const userSignUp = async (data:any) =>{
  try{
    const res = await axios.post("http://localhost:5000/api/register",data);
    return res;
  }catch(err){
    return err;
  }
}