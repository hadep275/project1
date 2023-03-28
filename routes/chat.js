import express from "express";
export const chatRouter = express.Router();

import {
  FAQs,
  FAQsResponses,
  greetings,
  greetingsResponses,
  farewell,
  farewellResponses,
  unknown,
  unknownResponse,
  greetingsPrefix,
  farewellPrefix,
} from "../data.js";

chatRouter.get("/welcome", (req, res) => {
  res.send("Welcome Back to the land of the living");
});

chatRouter.get("/welcome/about", (req, res) => {
  res.send("What We Are All About");
});

chatRouter.put("/add", (req, res) => {
  res.send("There There");
});

chatRouter.delete("/farewell", (req, res) => {
  res.send("Odabo");
});

chatRouter.post("/submit", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`Hello ${name}, how can I help you?`);
  } else {
    res.send("hi Who the F*** is there?");
  }
  //res.send("Final Destination");
});

chatRouter.post("/chat", (req, res) => {
  const question = req.body.question;
  let answer = getAnswer();
  res.send(`You asked: ${question}, \nThe answer is ${answer}`);
});

function getAnswer() {
  const answers = [566, 8999, 50000, 9325, 19900];
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}
chatRouter.post("/greetings", (req, res) => {
  const greet = req.body;
  console.log(greet);
  if (greetings.includes(greet.greetings)) {
    const randomIndex = Math.floor(Math.random() * greetingsResponses.length);
    const randomIndex1 = Math.floor(Math.random() * greetingsPrefix.length);
    let answer = greetingsResponses[randomIndex];
    res.send(`${greetingsPrefix[randomIndex1]} ${greet.name}, ${answer}`);
    }
  
});

chatRouter.post("/FAQs", (req, res) => {
  const question = req.body;
console.log(question);
  if (FAQs.includes(question.FAQs)) {
    const randomIndex = Math.floor(Math.random() * FAQsResponses.length);
  let answer = FAQsResponses[randomIndex];
  res.send(`You asked: ${question.FAQs}, \n ${answer}`);
}});

chatRouter.get("/FAQs", (req,res)=>{
  //res.send(`You asked: ${question.FAQs}, \n ${answer}`);
  res.send(`Ask one of the following: \n\n ${FAQs}`);
}
);


chatRouter.post("/farewell", (req, res) => {
  const sendOff = req.body;
  console.log(sendOff);
  if (farewell.includes(sendOff.farewell)) {
    const randomIndex = Math.floor(Math.random() * farewellResponses.length);
    const randomIndex1 = Math.floor(Math.random() * farewellPrefix.length);
    let answer = farewellResponses[randomIndex];
    res.send(`${farewellPrefix[randomIndex1]} ${sendOff.name}, ${answer}`);
  } 
});

chatRouter.post("/unknown", (req, res) => {
  const error = req.body.unknown;
  console.log(error);
  if (error == "try again") {
    const randomIndex = Math.floor(Math.random() * unknownResponse.length);
    let answer = unknownResponse[randomIndex];
    res.send(`${error}, \n ${answer}`);
  } else if (error == "failed") {
    res.send(`I do not understand`);
  }
});
