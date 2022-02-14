/**3) Dados o array nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo"], escreva o comando que retorna um array somente com nomes com mais de 5 caracteres.
 */

const nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo"]
const palavra = (nomes => nomes.length > 5)
const contagem = nomes.filter(palavra)
console.log(contagem)
