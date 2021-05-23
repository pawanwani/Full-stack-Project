import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv"
import blogRouter from '../routes/blog-router';
import userRouter from '../routes/user-router';

const configureEvironment=()=>{
    env.config();
}
async function connectToDb() {
    const connStr = `mongodb+srv://${process.env.DB_username}:${process.env.DB_PASS}@cluster0.s3eeb.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
    console.log("Initializing  database connection");
    await mongoose.connect(connStr, { useNewUrlParser: true, useUnifiedTopology: true, });
    console.log("database connection established");
}
function configureExpress() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.get('/', (req, res)=>{
        res.send('Hello You have Landed on my api server')
    })
    app.use('/api',userRouter())
    app.use('/api',blogRouter())
    return app;
}

const startServer = async () => {
    configureEvironment()
    await connectToDb();
 const app = configureExpress();
  const server = app.listen(process.env.DB_PORT);
  server.on("error", (error: any) => {
    console.log("server error", error.message);
  });
}

startServer()
.then(()=>{console.log('server started on port',process.env.DB_PORT)})
.catch((error:any)=>{console.log("error starting server",error.message)})
