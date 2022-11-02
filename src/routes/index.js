import express from "express";
import editoras from "./editoraRoutes.js";
import autores from "./autoresRoutes.js";
import livros  from "./livrosRoutes.js";

const routes = (app) =>{
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores,
        editoras
    )
}

export default routes;