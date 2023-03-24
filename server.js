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

app.get("/welcome", (req, res) => {
  res.send("Welcome Back to the land of the living");
});

app.get("/about", (req, res) => {
  res.send("What We Are All About");
});

app.put("/add", (req, res) => {
  res.send("There There");
});

app.delete("/farewell", (req, res) => {
  res.send("Odabo");
});

app.post("/submit", (req, res) => {
  const data = req.body;
  // TODO: process the submitted data
  res.send("Final Destination");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;
  res.json({ message: "Back Again" });
});

app.listen(port, (response, request) => {
  console.log(`Started from the bottom now we here: ${port}`);
});



