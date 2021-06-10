import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import "./styles/detilsPage.css";
import GetDetails from "../requests/getDetails";
const bodytohtml = (body:string) =>{
    return(
        parse(body)
    )
}


const Details = () =>{
    const params = useParams<any>();
    const [detail, setDetails] = useState(" ");
    const [yes, setYes] = useState(false);



    useEffect(()=>{
        GetDetails(params.id)
        .then(data =>{
            // console.log(data)
            if(data.message === 'succsful'){
                // console.log(data);
                setYes(true)
                setDetails(data.data.body);
            }
        })
    }, []) 

    return (
      <Container
     
          className="details-page align-center "
   
            style={{ width: "60%", marginTop:  "20px",paddingTop:"20px"}}
      
      >
        {bodytohtml(detail)}
      </Container>
    );
}



export default Details;