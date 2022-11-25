/*Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.*/

const grausCelsius = parseInt(prompt('Informe a temperatura em graus Celsius:'));

const fahrenheit = (9 * grausCelsius / 5) + 32

alert (`A temperatura em escala Fahrenheit é de ${fahrenheit}º graus!`);