import React from 'react'
import { Button } from 'react-bootstrap'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { makeStyles,Theme,createStyles,ThemeProvider, } from "@material-ui/core/styles";
import landingpage from "../images/landingpage.jpg"
import wowlogo from "../images/wowlogo.png"
import './landingdesign.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      display: "flex",
      flexWrap: "wrap",
      paddingBottom:"10px"
    },
  })
);
function Landing() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

    return (
        <div>
            <Card className="cardHeader">
                {/* <img className="logo" src={wowlogo}></img> */}
                <Card.Header>Welcome To Words Of Wonder</Card.Header>
            </Card>
            <Container className="TextPic">
                <Row>
                <Col sm={6}>
                <div >
                <img className="logo1" src={wowlogo}></img>
                <p className="textDesg" />
                <h1>Publishing Platform<br />for professional<br />bloggers</h1>
                <p className="subhead"><br /><b>The first thing you learn when you’re blogging is that people are one click away from leaving you.
                So you’ve got to get to the point, you can’t waste people’s time,
                you’ve got to give them some value for their limited attention span<br></br><br></br>
                <br /></b></p>
                <button className="button"><span> Get Started By clicking</span></button>
                </div>
                </Col>
                 <Col sm={6} >
                <div>
                <img className="img" src={landingpage}></img>
                </div>
                </Col>
                </Row>
            </Container>
            {/* <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.footer} 
    > */}
      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      {/* <p>Byeee</p>
    </BottomNavigation> */}
        </div>
    )
}

export default Landing
