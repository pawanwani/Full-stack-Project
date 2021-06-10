import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AllData from "../requests/getPost";
import moment from "moment";
import { Avatar, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Postlist() {
  const classes = useStyles();
  const [data, setData] = useState<any>([{}]);
  const [sc, setsc] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  // const blog = useSelector(state => state.blogs)

  useEffect(() => {

    AllData().then((data: any) => {
      setData(data);
      if (data.message === "succsful") {
        setsc(true);
      }
    });

  }, []);
  return (
    <React.Fragment>
      <div>
        <Container maxWidth="lg" style={{ padding: "0px" }}>
          <img src={Banner} width="100%" height="500px"></img>
        </Container>
        {sc ? (
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {data.data.map((post: any) => (
                <Grid item key={post._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <Link to={"/details/" + post._id}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://picsum.photos/200"
                        title="Image title"
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography>{post.subtitle}</Typography>

                      <Box display="flex" p={1}>
                        <Box p={1} flexGrow={1}>
                          <Avatar>
                            <img src="https://i.pravatar.cc/50"></img>
                          </Avatar>
                        </Box>
                        <Box p={1}>
                          <Typography variant="body2">
                            created on <br></br>
                            {moment(post.updatedAt).format("MMM DD")}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : null}
      </div>
    </React.Fragment>
  );
}
