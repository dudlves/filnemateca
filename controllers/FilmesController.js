const uniqid = require('uniqid')
const fs = require ('fs')

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
    buscarPorGenero: (req, res)=> {
        
    },
    addFilme: (req, res) => {
        /*
        {
            "id": "fc0f5d74b0ee816a",
            "cartaz": "fc0f5d74b0ee816a.jpg",
            "titulo": "Casa Gucci",
            "generos": [
                "Drama"
            ],
            "censura": 14,
            "trailer": "https://youtu.be/juSv4y5_0Xo",
            "sinopse": "Casa Gucci é inspirada na chocante história real do império da família por trás da italiana casa de moda Gucci. Abrangendo três décadas de amor, traição, decadência, vingança e em última instância, assassinato, vemos o que um nome significa, o que vale e quão longe uma família para se manter no controle."
        }
        */
        
        // 1 - Criar um objeto com a estrutura acima e guardar numa var filme:
        //      1.1: Criar o ID
        let novoId = uniqid();

        //      1.2: Capturar os generos do filme
        let generos = [];
        for(let i in req.body){
            if(req.body[i] == "on"){
                generos.push(i);
            }
        }

        //      1.3: Todo o resto
        let filme = {
            "id": novoId,
            "cartaz": req.file.filename,
            "titulo": req.body.titulo,
            "generos": generos,
            "censura": req.body.censura,
            "trailer": req.body.trailer,
            "sinopse": req.body.sinopse
        }


        // 2 - Salvar o objeto filme no arquivo filmes.json
        //      2.1 - Importar o array de filmes
        const filmes = require('../database/filmes.json');

        //      2.2 - Adicionar o filme ao final do array de filmes
        filmes.push(filme);

        //      2.3 - salvar todo o array de filmes no arquivo filmes.json
        fs.writeFileSync(
            __dirname + '/../database/filmes.json',
            JSON.stringify(filmes,null,4)
        )

        // Responder o cliente
        res.redirect('/admin')
    }
}

module.exports = FilmesController