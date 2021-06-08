import React, { useEffect } from 'react';
import {Avatar, Container, Grid, Box, Paper, Typography, Button, Tabs, Tab} from '@material-ui/core'
import {Settings} from '@material-ui/icons/';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      
      alignItems: 'center',
      justifyContent : 'center',
      padding : theme.spacing(4)
    },
    avat : {
        paddingLeft : '40%',
    },
    userInfo1 : {
        display : 'flex'
    },
  }),
);

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: any) {
return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
};
}


const ProfilePage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [info, setInfo] = React.useState(" ")

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    useEffect(()=>{
        
    })


    return(
        <Container>
            <Grid container spacing= {3}>
                <Grid item xs = {6}>
                    <Grid className = {classes.avat}>
                    <Avatar className = {classes.large}>
                        
                    </Avatar>
                    </Grid>
                </Grid>
                <Grid item xs = {6}>
                    <Grid className = {classes.userInfo1}>
                        <Grid item xs = {6}>
                            <Typography variant = "h5">
                                Ketan987
                            </Typography>
                        </Grid>
                        <Grid item xs = {6}>
                            <Button variant="outlined" color="primary">
                                Edit Profile
                            </Button>
                        </Grid>
                    </Grid>
                    <hr></hr>
                    <Grid>
                        <Grid>
                            <Typography>
                                <strong>12</strong> Posts     <strong>12</strong> Likes   
                            </Typography>
                        </Grid>
                        <br></br>
                        <Grid>
                            <Typography>Ketan Pise</Typography>
                            <Typography>lalala land</Typography>
                            <Typography>Isko bhi le lo</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs = {12}>
                    <Paper square>
                        <Tabs
                            variant="fullWidth"
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollButtons="auto"
                            onChange={handleChange}
                            aria-label="User Data"
                        >
                            <Tab label="My Posts" icon = {<AllInboxIcon />}  {...a11yProps(0)}/>
                            <Tab label="Add Post" icon = {<PostAddIcon />}  {...a11yProps(1)}/>
                            <Tab label="Liked Post" icon = {<FavoriteIcon />}  {...a11yProps(2)}/>
                            <Tab label="Saved Post" icon = {<BookmarkBorderIcon />}  {...a11yProps(3)}/>
                        </Tabs>
                    </Paper>
                    <Container>
                    <TabPanel value = {value} index = {0}>
                            one
                        </TabPanel>
                        <TabPanel value = {value} index = {1}>
                            Two
                        </TabPanel>
                        <TabPanel value = {value} index = {2}>
                            Three
                        </TabPanel>
                        <TabPanel value = {value} index = {3}>
                            four
                        </TabPanel>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}


export default ProfilePage;