const filmes = require('../database/filmes.json')
const uniqid = require('uniqid')
const fs = require('fs')

const services = {
    listar: function(){
        return filmes;
    },
    getTitulos:function(){
        let titulos=[]
        for (let f of filmes) {
            // console.log(f.titulo)
            titulos.push(f.titulo)
        }
        return titulos
    },
    create: function(
                cartaz, 
                titulo, 
                censura, 
                trailer, 
                sinopse, 
                generos){
        // id para o filme
        let id = uniqid()

        // objeto literal 
        let novoFilme ={
            id, cartaz, titulo, generos, censura, trailer, sinopse
        }

        // adiciona objeto criada ao array de filmes 
        filmes.push(novoFilme)

        // salvar o conteudo do array filmes no arquivo filmes.json
        fs.writeFileSync(
            __dirname +'/../database/filmes.json',
            JSON.stringify(filmes,null,4)
        )

    },
    apagar: function(){},
    editar: function(){}

}

module.exports = services