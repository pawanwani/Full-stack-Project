import React from 'react'
import { makeStyles, Theme, createStyles, ThemeProvider } from "@material-ui/core/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import landingpage from "../images/landingpage.jpg"
import { Button, CssBaseline, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        minWidth: '1024',
        width: '100%',
        height: 'auto',
        backgroundImage: `url(${landingpage})`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        position: 'relative',
        justifyContent:'center',
        display: "flex",
        flexWrap: "wrap",
    },

    leftalign: {
        justifyContent:'left',
        alignItems:'left',
        fontSize: '60px',
        color:'black',
        fontFamily: 'Russo One'
    },

    // typography: {
    //     alignItems:'left',
    //     fontSize: '60px',
    //     color:'black',
    //     fontFamily: [
    //         'Russo One'
    //     ].join(','),
    //   },
}))

function LandingPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.leftalign}>Words of Wonder</Typography>
            <Button className="button"> Get Started</Button>
            <CssBaseline />
        </div>
    )
}

export default LandingPage
