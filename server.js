import express from "express";
const app = express();

const port = 2000;

app.listen(port, (response, request) => {
  console.log(`Started from the bottom now we here: ${port}`);
});

app.get("/", (request, response) => {
  response.send("Fresher");
});

