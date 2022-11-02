import mongoose from "mongoose";

//Criar o schema
const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        editora: {type: String, required: true}
    }
);

const editoras = mongoose.model('editoras', editoraSchema)
export default editoras;