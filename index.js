import express from "express";
import router from "./api-routes.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8080;
const apiRoutes = router;
dotenv.config();

// middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

    console.log("Successfully connected to mongodb database");
    console.log(
      `If this is running locally then visit: http://localhost:${port} to view`
    );

    return mongoose.connection;
  } catch (err) {
    console.log("Could not connect to mongodb database");
  }
};

connectDB();

// endpoints
app.get("/", (req, res) => {
  res.json("Hello world");
});

app.use("/api", apiRoutes);
app.listen(port, () => {
  console.log("Running on port: " + port);
});
