import  express from "express";
import LivroController from "../controllers/livrosController.js";

//Roteamento do express
const router = express.Router();

router
    /*Quando for feito um get em /livros, o que vamos fazer?
    Chamar o método do controller
    */
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.exclcuirLivro)

export default router;
