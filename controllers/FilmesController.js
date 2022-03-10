const FilmesController = {
    index: (req,res) => {
        const filmes = require("../database/filmes.json")
        res.render('index.ejs',{filmes})
    },
    listarFilmes:(req,res) => {
        const filme = require('../database/filmes.json')
        res.send(filme)
    },
    buscaPorPosicao:(req,res) =>{
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json')
        let filme =filmes[posicao]
        res.render('filme.ejs',{filme})
    },
    buscarPorTrecho: (req, res)=>{
        let trecho = req.query.busca;
        const filmes = require('../database/filmes.json')
        let filtradora = filme => {
            return filme.titulo.includes(trecho)
        }
        let resultadoDaBusca= filmes.filter(filtradora)
          res.render('index.ejs',{filmes: resultadoDaBusca})
    },
    buscaPorId: (req, res)=> {
        let id = req.params.id
        const filmes = require('../database/filmes.json')
        let filtradora = filme =>{
            if(filme.id == id){
                return true
            }else {
                return false 
            }
        }
        const filme = filmes.find(filtradora)
        res.render('filme.ejs',{filme})
    },
    buscarPorGenero: (req, res)=> {},
}

module.exports = FilmesController