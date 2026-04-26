import express from 'express';
import cors from 'cors';
import {dataRouter} from './src/routes/data.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check --------------------
app.get("/health", (request, response) => {
    response.status(200).json({status: "ok", timestapm: new Date().toISOString()});
});


app.use("/api/v1", dataRouter);

app.use((request, response) => {
    response.status(404).json({errMsg: "Página no encontrada :("});
});

export default app;