/*Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

const totalEleitores = prompt('Total de eleitores:');
const votosBrancos = prompt('Votos brancos:');
const votosNulos = prompt('Votos nulos:');
const votosValidos = prompt('Votos válidos:');



const percentualVotosBrancos = (votosBrancos / totalEleitores) * 100 
const percentualVotosNulos = (votosNulos / totalEleitores) * 100
const percentualVotosValidos = (votosValidos / totalEleitores) * 100

alert (`O percentual de votos em branco é ${percentualVotosBrancos}%`);
alert (`O percentual de votos nulos é ${percentualVotosNulos}%`);
alert (`O percentual de votos válidos é ${percentualVotosValidos}%`);