import React, { useEffect, useState } from 'react';
import AllData from '../requests/getPost';
import parse from 'html-react-parser';


const Showall = () =>{
    const [data, setData] = useState<any>([{}]);
    const [sc, setsc] = useState(false);

    useEffect(()=>{
        AllData()
        .then(data=>{
            console.log(data)
            setData(data)
            if(data.message === 'succsful'){
                setsc(true)
            }
        })
    }, [])

    const bodytohtml = (body:string) =>{
        return(
            parse(body)
        )
    }

    return(
        <div>
            {sc ?
                <div>
                {data.data.map((post:any) =>
                    <div key = {post.title}>
                        <h2>{post.title}</h2>
                        <hr></hr>
                        {bodytohtml(post.body)}
                    </div>
                )}
                </div> : null }  
        </div>
    )
}


export default Showall;