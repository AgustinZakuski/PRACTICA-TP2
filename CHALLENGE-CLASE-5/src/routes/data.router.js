import {Router} from 'express';
import {getDataController} from '../controllers/data.get.controller.js'
import {postDataController} from '../controllers/data.post.controller.js'

const dataRouter = Router();

dataRouter.get("/data", getDataController);
dataRouter.post("/data", postDataController);

export {dataRouter};