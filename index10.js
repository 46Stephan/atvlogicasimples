/*Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

const anoNascimento = parseInt(prompt('Digite o ano de seu nascimento:'))
const anoAtual = 2022
const idade = anoAtual - anoNascimento

if (idade >= 16){
    alert(`Você poderá votar este ano!`)
}
else{
    alert(`Você não poderá votar este ano, aguarde!`)
}