// Prueba de Health
async function health (){
fetch("http://localhost:3000/health")
    .then(res => res.json())
    .then(data => console.log(data))

}

// Prueba de bienvenida
async function bienvenida (){
fetch("http://localhost:3000/")
    .then(res => res.json())
    .then(data => console.log(data))

}
// Prueba de los chistes
async function chuckJoke (){
fetch("http://localhost:3000/api/v1/jokes/random")
    .then(res => res.json())
    .then(data => console.log(data))

}

health();
bienvenida();
chuckJoke();