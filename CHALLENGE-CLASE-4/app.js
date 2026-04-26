import express from "express";
import cors from "cors";
import {jokesRouter} from "./src/routes/jokes.proxy.js";

const app = express();

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health -----
app.get("/health", (request, response) => {
    response.status(200).json({ status: "ok", timestamp: new Date().toISOString()});
});

//Bienvenida -----
app.get("/", (request, response)=> {
    response.status(200).json({ message: "Bienvenidos a mi API" });
})

app.use("/api/v1", jokesRouter);

app.use((request, response)=>{
    response.status(404).json({message: "Not Found"})
})

export default app;