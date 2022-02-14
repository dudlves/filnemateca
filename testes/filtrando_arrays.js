
function maiorQueVinte (numero){
    if(numero > 20){
        return true
    }else{
        return false
    }
}

// arrow function
const maiorQueVinte = (numero) => {
    return numero > 20;
}

console.log(maiorQueVinte (16))


const numeros =[2,6,7,10,25,17,6,18,100]
let filtrados = numero.filter(maiorQueVinte)
console.log(filtrados)

