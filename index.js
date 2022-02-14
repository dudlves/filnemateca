const express = require('express')

//Importantando os roteadore
const FilmesRouter = require('./routers/FilmesRouter')

//criando servidor
const servidor = express()

//Usando rotiador 
servidor.use('/',FilmesRouter)

servidor.listen(3000)