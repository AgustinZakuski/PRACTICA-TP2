import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(path.dirname(__filename)));

const __joiner = (...rutas) => path.join(__dirname, ...rutas);

export {__joiner};