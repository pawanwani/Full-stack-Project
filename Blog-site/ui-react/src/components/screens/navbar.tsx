import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));



export default function Header(props:any) {
  const classes = useStyles();
  const userState = useSelector((state:any)=> state.userState);
  const dispatch = useDispatch();
  const history = useHistory()
  console.log(userState);



  const handleAddPostClick = () =>{
    if(userState.login){
      history.push("/addpost")
    }
    else{
      history.push("/user/login")
    }
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" onClick = {() => {
          history.push("/")
        }}>Home</Button> &nbsp;&nbsp;&nbsp;
       
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
      <Button style={{margin:'0px 40px'}}size="small">Bloglist</Button> &nbsp;&nbsp;&nbsp;
      WORDS OF WONDER

        <Button style={{margin:'0px 60px'}}size="small" onClick = {handleAddPostClick}>Add Blog</Button> 
        </Typography>
      
     
        <IconButton>
          <SearchIcon />
        </IconButton>
        {userState.login ? null:
        <Button variant="outlined" size="small" onClick = {() =>{history.push("/user/login")}}>
          Sign In
        </Button>}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};