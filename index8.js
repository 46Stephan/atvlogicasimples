/*Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.*/

const nome = prompt('Qual é o seu nome?')
const quantidade = nome.length
const idade = prompt('Qual é a sua idade?')
const anoNascimento = 2022 - idade;


alert(`Nome:${nome}, possui ${quantidade} letras. Idade: ${idade},  nasceu em ${anoNascimento}!`)