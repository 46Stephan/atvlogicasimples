/*Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

const valorUm = parseInt(prompt('Informe um valor:'));
const valorDois = parseInt(prompt('Informe outro valor:'));

if (valorUm == valorDois) {
    resultado = 'Valores iguais'
}

else if (valorUm > valorDois) {
    resultado = ('Valor 1 é maior do que o Valor 2')
}    
else{   
    resultado = ('Valor 1 é menor do que o Valor 2')   
    
} 
console.log(resultado)
alert (`O valor indicado é ${resultado}.`)
