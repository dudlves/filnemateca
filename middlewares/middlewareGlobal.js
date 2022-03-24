
module.exports = (req,res,next) => {
    let hora = (new Date()).getHours()
    if(hora<8 || hora >= 20){
        res.send("Ja tá tarde... vá pra casa")
    }else{
        console.log("A requisição esta indo...")
        next()
        console.log("A resposta ta voltando...")
    }
  
}