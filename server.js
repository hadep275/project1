import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const API_URL = "http://localhost:2000/";

const app = express();

const port = 2000;

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Fresher");
});

app.get('/welcome', (req, res) => {
  res.send('Welcome Back to the land of the living');
});

app.post("/chat", (req, res) => {
  const message = req.body.message;
  // TODO: process the user's message and generate a response
  res.json({ message: "sjlsjaldkj" });
});

app.listen(port, (response, request) => {
  console.log(`Started from the bottom now we here: ${port}`);
});



