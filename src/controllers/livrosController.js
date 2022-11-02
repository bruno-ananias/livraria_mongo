import livros from "../models/Livro.js"
/*  
    Controller - Faz o intermédio entre a requisição que é feita (via página, posmtman, etc) e o banco de dados
*/
class LivroController{
    static listarLivros = (req, res)=>{
       //Transformar o campo autor em chave estrangeira
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivroPorId = (req, res)=>{
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err} - Erro ao localizar o livro`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res)=>{
        //Livro vai ser criado com o que vem no body da requisição
        let livro = new livros(req.body);
        livro.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar o livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res)=>{
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Registro atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static exclcuirLivro = (req, res)=>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: "Registro Excluído com sucesso!"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivrosPorEditora = (req, res) =>{
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) =>{
            res.status(200).send(livros)
        })
    }
}

export default LivroController