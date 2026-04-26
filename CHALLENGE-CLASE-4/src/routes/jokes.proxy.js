import {Router} from "express";
import {jokeProxy} from "../controllers/jokes.proxy.controller.js";

const jokesRouter = Router();

jokesRouter.get("/jokes/random", jokeProxy);

export {jokesRouter}