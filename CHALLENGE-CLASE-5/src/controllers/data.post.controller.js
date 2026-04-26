import fs from 'fs/promises';
import {__joiner} from '../utils/manejador.paths.js'

export const postDataController = async (request, response) => {
    try{
        const datosACargar = request.body;
        
        if(!datosACargar.nombre || !datosACargar.coords) {
            return response.status(400).json({errMsg: "Faltan datos que cargar"});
        }

        const archivo = await fs.readFile(__joiner("data", "data.json"));
        const data = JSON.parse(archivo);

        data[datosACargar.nombre] = datosACargar.coords

        await fs.writeFile(__joiner("data", "data.json"), JSON.stringify(data, null, 2));

        response.status(201).json({status: "guardado", msg: "Datos guardados correctamente!"});
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}