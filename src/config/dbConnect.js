import mongoose from "mongoose"

mongoose.connect("mongodb+srv://bruno_ananias:fNabDwFzgCd2jq5A@cluster0.g1xx6hy.mongodb.net/alura_livraria");

let db = mongoose.connection;

export default db;