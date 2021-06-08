import axios from 'axios';


const signin = async(email:string, password : string) => {
    const output = await axios({
        url : "http://localhost:5000/api/login",
        method : "POST",
        data : {
            email, password
        }
    })
    return output.data
}

export default signin;