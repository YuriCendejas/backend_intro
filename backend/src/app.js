import express from "express";
import userRoutes from "./routes/user.route.js";

const app = express(); // creates express app

app.use(express.json()); 

app.get("/",(req,res) => { res.send("Server is working!");}); // or else it'll say cannot get/ on the "curl" test

app.use('/api/users',userRoutes);// this combined with the ("/register",registerUser) part in the route file. for the postmon url

export default app;