import mongoose from "mongoose"

mongoose.connect("mongodb+srv://user:senha@cluster.mongodb.net/alura_livraria");

let db = mongoose.connection;

export default db;