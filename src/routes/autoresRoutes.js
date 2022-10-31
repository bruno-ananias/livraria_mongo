import  express from "express";
import AutorController from "../controllers/autoresController.js";

//Roteamento do express
const router = express.Router();

router
    /*Quando for feito um get em /livros, o que vamos fazer?
    Chamar o método do controller
    */
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.exclcuirAutor)

export default router;
