import express from "express";
export const chatRouter = express.Router();

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
  const data = req.body;
  res.send("Final Destination");
});

chatRouter.post("/chat", (req, res) => {
  const message = req.body.message;
  res.json({ message: "Back Again!" });
});

