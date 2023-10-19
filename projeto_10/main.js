//calculadora de porcentagem

let valorConta = Number(prompt('Digite o valor da conta: ')) 
let porcentagem = Number(prompt('Digite a porcentagem a ser cobrada'))
porcentagem = (valorConta * porcentagem) / 100
valorConta = valorConta + porcentagem

alert(`O valor da sua conta é de R$ ${valorConta}`)



