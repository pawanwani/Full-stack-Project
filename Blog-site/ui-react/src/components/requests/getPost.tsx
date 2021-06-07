import axios from 'axios';

const GetPost = async() =>{
    const output = await axios({
        method : 'GET',
        url : 'http://localhost:5000/api/blogs'
    })
    return output.data
}


export default GetPost;