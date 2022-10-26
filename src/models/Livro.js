import mongoose from "mongoose";

//Criar um schema
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required:true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

//livros = coleção inteira
//                              Nome da coleção
const livros = mongoose.model('livros', livroSchema)
export default livros;