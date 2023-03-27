import express from "express";
import { chatRouter } from "./routes/chat.js";
//import {dialogRouter} from "./dialogFlow";
//const dialogRouter = require("./dialogFlow");

const API_URL = "http://localhost:2000/";

const app = express();
const port = 2000;

app.use(express.json());

app.use("/chat", chatRouter);

app.get("/", (request, response) => {
  response.send("Fresher");
});

app.listen(port, (response, request) => {
  console.log(`Started from the bottom now we here: ${port}`);
});
