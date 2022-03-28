const express = require('express')
const path =require('path')
const middlewareGlobal = require('./middlewares/middlewareGlobal')
//Importantando os roteadore
const FilmesRouter = require('./routers/FilmesRouter')

const AdmRouter = require('./routers/AdmRouter')

//criando servidor
const servidor = express()

servidor.set('view engine','ejs')

servidor.use(express.static(path.join(__dirname, 'public')));

//poe as informaçao do formulario no req.body
servidor.use(express.urlencoded({ extended: false }));


servidor.use(middlewareGlobal)

//Usando rotiador 
servidor.use('/',FilmesRouter)
servidor.use('/',AdmRouter)

servidor.listen(3000)