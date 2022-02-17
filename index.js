const express = require('express')
const path =require('path')
//Importantando os roteadore
const FilmesRouter = require('./routers/FilmesRouter')

//criando servidor
const servidor = express()

servidor.set('view engine','ejs')

servidor.use(express.static(path.join(__dirname, 'public')));


//Usando rotiador 
servidor.use('/',FilmesRouter)

servidor.listen(3000)