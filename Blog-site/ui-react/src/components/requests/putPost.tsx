import axios from 'axios';

const PutPost = async(title:string, subtitle:string, body:string, writer:string, tags:any)=> {
    const output = await axios({
        method : 'POST',
        url : 'http://localhost:5000/api/blogs',
        data: {
            title,
            subtitle,
            body,
            writer,
            tags
        }
    })
    console.log(output.data);
    return output.data
}

export default PutPost;