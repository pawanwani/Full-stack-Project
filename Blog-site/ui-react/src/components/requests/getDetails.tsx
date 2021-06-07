import axios from 'axios';

const GetDetails = async(id:string) =>{
    const output = await axios({
        method : 'GET',
        url : 'http://localhost:5000/api/blogs/'+id
    })
    return output.data
}


export default GetDetails;