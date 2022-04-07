const express = require('express')
const session = require("express-session");
const path =require('path')
const middlewareGlobal = require('./middlewares/middlewareGlobal')
//Importantando os roteadore
const FilmesRouter = require('./routers/FilmesRouter')

const AdmRouter = require('./routers/AdmRouter')

//criando servidor
const servidor = express()

servidor.set('view engine','ejs')

servidor.use(express.static(path.join(__dirname, 'public')));

// configurando o middleware que lida com session
servidor.use(session({secret:"SEGREDO", saveUninitialized: false, resave: true}));

//poe as informaçao do formulario no req.body
servidor.use(express.urlencoded({ extended: false }));


servidor.use(middlewareGlobal)

//Usando rotiador 
servidor.use('/',FilmesRouter)
servidor.use('/',AdmRouter)

servidor.listen(3000)