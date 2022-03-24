const express = require ('express') 

const middlewareGardaBusca = require("../middlewares/middlewareGuardaBusca")

const router = express.Router()

const FilmesController = require('../controllers/FilmesController')


router.get('/', FilmesController.index)

router.get('/filme', FilmesController.listarFilmes)

router.get('/filmes/:id', FilmesController.buscaPorId)

router.get('/busca', middlewareGardaBusca ,FilmesController.buscarPorTrecho)

router.get('/buscaid/:id', (req,res) => {
    let id =req.params.id
    const filmes = require('../database/filmes.json')
    
})



module.exports = router