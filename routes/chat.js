import express from "express";
import dialogFlow from "dialogFlow";
export const chatRouter = express.Router();
import { greetings, greetingsResponses, farewell, farewellResponses, unknown} from "../data.js";
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
  const greet = req.body.greetings;
console.log(greet);
  if (greet =="Hello") {
    const randomIndex = Math.floor(Math.random() * greetingsResponses.length);
  let answer = greetingsResponses[randomIndex];
  res.send(`You asked: ${greet}, \n ${answer}`);
  }
  else if (greet =="Hi") {
    
  res.send(`Hello Hikmah!`);
  }
  
});

chatRouter.post("/farewell", (req, res) => {
  const sendOff = req.body.farewell;
console.log(sendOff);
  if (sendOff =="goodbye") {
    const randomIndex = Math.floor(Math.random() * farewellResponses.length);
  let answer = farewellResponses[randomIndex];
  res.send(`You asked: ${sendOff}, \n ${answer}`);
  }
  else if (sendOff =="bye") {
    
  res.send(`bye Hikmah!`);
  }
  
});



 
