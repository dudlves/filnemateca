const express = require ('express')          

const router = express.Router()

const FilmesController = require('../controllers/FilmesController')


router.get('/', FilmesController.index)

router.get('/filme', FilmesController.listarFilmes)

router.get('/filmes/:posicao', FilmesController.buscaPorPosicao)

router.get('/busca', FilmesController.buscarPorTrecho)

router.get('/buscaid/:id', (req,res) => {
    let id =req.params.id
    const filmes = require('../database/filmes.json')
    
})

router.get('/')

module.exports = router