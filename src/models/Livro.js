import mongoose from "mongoose";

//Criar um schema
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        //transformar o autor em chave estrangeira
        // autor: {type: String, required:true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        // editora: {type: String, required: true},
        editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
        numeroPaginas: {type: Number}
    }
);

//livros = coleção inteira
//                              Nome da coleção
const livros = mongoose.model('livros', livroSchema)
export default livros;