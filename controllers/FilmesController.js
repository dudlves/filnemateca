const FilmesController = {
    index: (req,res) => {
        console.log("Alguém fez uma requisição...")
        res.send("Toma ai o que você me pediu...")
    },
    listarFilmes:(req,res) => {
        const filme = require('../database/filmes.json')
        res.send(filme)
    },
    pelaPosicao:(req,res) =>{
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json')
        res.send(filmes[posicao])
    },
    buscarPorTrecho: (req, res)=>{
        let trecho = req.params.trecho;
        const filmes = require('../database/filmes.json')
        let filtradora = filme => {
            return filme.titulo.includes(trecho)
        }
        let resultadoDaBusca= filmes.filter(filtradora)
          res.send(resultadoDaBusca)
        },
        buscarPorId: (req, res)=> {},
        buscarPorGenero: (req, res)=> {},
}

module.exports = FilmesController