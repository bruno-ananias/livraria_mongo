import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

//Fazer uma conexão e se der erro, printar o erro no console
db.on("error", console.log.bind(console, 'Erro de conexão'))
//Tentar abrir a conexão
db.once("open", ()=>{
    console.log("Conectado ao mongo.")
})

const app = express();

//declarar que o express está usando json. O que chega via json/put, vai ser transformado em objeto.
app.use(express.json());

//passamos o arquivo routes para o nosso app.
routes(app);



export default app;