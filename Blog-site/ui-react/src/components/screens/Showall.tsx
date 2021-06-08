import React, { useEffect, useState } from 'react';
import AllData from '../requests/getPost';
import parse from 'html-react-parser';
import Post from '../post/post';

// material ui library
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Container, Typography,} from '@material-ui/core';
import {Box} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FavoriteBorderRounded} from '@material-ui/icons';
import {Share} from '@material-ui/icons';
import { Paper, Grid } from '@material-ui/core'
// import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
// import {useSlopeCardMediaStyles} from '@mui-treasury/styles/cardMedia/slope';
// import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';


const useStyles = makeStyles(() => ({
    root: {
        display : 'flex',

    },
    content: {

    },
    mainGrid: {
      },
    avatar: {

    },
    
  }));


const Showall = () =>{
    const cardStyles = useStyles();
    const [data, setData] = useState<any>([{}]);
    const [sc, setsc] = useState(false);
    // const mediaStyles = useSlopeCardMediaStyles();

    useEffect(()=>{
        AllData()
        .then(data=>{
            console.log(data);
            setData(data)
            if(data.message === 'succsful'){
                setsc(true)
                
            }
        })
    }, [])

    return(
        <Container>
            <div>
                {sc ?
                    <Grid container spacing={4} className= {cardStyles.root}>
                        {data.data.map((post:any) =>(
                            <Post key = {post.title} post={post}/>
                        )
                        )}
                    </Grid> : null }  
            </div>
        </Container>
    )
}


export default Showall;



