const express = require('express')

//criando servidor
const servidor = express()

//criando rotas
servidor.get('/', (req,res) => {
    console.log("Alguém fez uma requisição...")
    res.send("Toma ai o que você me pediu...")
})

servidor.get('/filme', (req,res) => {
    console.log("Alguém fez uma requisição...")
    res.send("filme bom ...")
})

servidor.get('/generos', (req,res) => {
    console.log("Alguém fez uma requisição...")
    res.send("generos")
})

servidor.get('/filmes/:posicao', (req,res) =>{
    let posicao = req.params.posicao;

    const filmes = require('./database/filmes.json')

    res.send(filmes[posicao])
})


servidor.listen(3000)