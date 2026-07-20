import express from "express";

const app = express(); // creates express app

app.use(express.json()); 

app.get("/",(req,res) => { res.send("Server is working!");}); // or else it'll say cannot get/ on the "curl" test

export default app;