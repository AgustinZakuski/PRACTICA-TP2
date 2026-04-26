import fs from 'fs/promises';
import {__joiner} from '../utils/manejador.paths.js'

export const getDataController = async (request, response) => {
    try{
        const data = await fs.readFile(__joiner("data", "data.json"), "utf8");
        response.status(200).json({data});
    } catch (error) {
        response.status(500).json({errMsg: error.message});
    }
}