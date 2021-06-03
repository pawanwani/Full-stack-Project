import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";

const configureEnv = () => {
  env.config();
};
async function connectDB() {
  const connectionURL = `mongodb+srv://${process.env.username}:${process.env.password}@mycluster.s83ac.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
  await mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (error) =>
    console.log("mongoose error", error.message)
  );
}
function configureExpress() {
  const app = express();
  app.use(cors());
  return app;
}

const startServer = async () => {
  configureEnv();
  await connectDB();
  const app = configureExpress();
  const server = app.listen(process.env.PORT);
  server.on("error", (error: any) =>
    console.log(`server error`, error.message)
  );
};

startServer()
  .then(() => console.log(`server started on port`, process.env.PORT))
  .catch((error: any) => console.log(`error starting server`, error.message));
