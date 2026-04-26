// Healthcheck ------------------
async function checkHealth() {
    const res = await fetch("http://localhost:3000/health");
    const data = await res.json();
    console.log("--- Probando health --------------------");
    console.log(data);
}

// Endpoint GET /data
async function getData() {
    const res = await fetch("http://localhost:3000/api/v1/data");
    const data = await res.json();
    console.log("--- Probando endpoint GET --------------------");
    console.log(data);
}

async function postData(nombre, coords) {
    const res = await fetch("http://localhost:3000/api/v1/data", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre: nombre, coords: coords})
    });
    const data = await res.json();
    console.log("--- Probando endpoint POST --------------------");
    console.log(data);
}

async function ejecutarPruebas() {
    await checkHealth();
    await postData("NEW-ROW", [1,1]);
    await getData();
}

ejecutarPruebas();