/*Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por
ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.*/

const salarioFixo = parseInt(prompt('O salário fixo dos vendedores é de R$:'));
const comissaoFixa = parseInt(prompt('A comissão fixa por carro vendido é de R$:'));
const numeroCarros = parseInt(prompt('A quantidade de carros vendidos foi de'));
const totalVendas = parseInt(prompt('O valor total de suas vendas foi de R$:'));

const salarioFinal = (numeroCarros * comissaoFixa) + (totalVendas * 0.05) + salarioFixo
alert (`O salário final do vendedor foi de R$ ${salarioFinal}`);