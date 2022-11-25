/*As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const compraMacas = parseInt(prompt('Quantas maçãs você gostaria de comprar?'))
alert (`O cliente quer ${compraMacas} maçãs.`)

if (compraMacas < 12){
    resultado = compraMacas * 0.30
}

else if (compraMacas >= 12){
    resultado = compraMacas * 0.25
}

console.log(resultado)
alert(`Sua compra custou R$${resultado}.`)