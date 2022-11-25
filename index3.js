/*O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.*/

const custoFabrica = parseInt(prompt('Informe o custo de fábrica do automóvel:'));
alert (`O custo de fábrica do automóvel é de R$${custoFabrica}`);

const percDistribuidor = (custoFabrica * 28) / 100
const percImpostos = (custoFabrica * 45) / 100
const custoFinal = (custoFabrica + percDistribuidor + percImpostos)

alert (`O custo final do automóvel é de R$${custoFinal}`);