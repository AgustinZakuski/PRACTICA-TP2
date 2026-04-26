import app from "./app.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Si estás leyendo esto, el server se levantó en: ${PORT}`);
});

// Para probar el funcionamiento de lo pedido está la clase test.js
// Comandos definidos en el package.json:
/*
"scripts": {
    "dev": "node --watch server.js",
    "test": "node test.js"
}
*/ 