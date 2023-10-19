
let age = prompt('Digite a sua idade: ')
let question = prompt('Tem titulo de eleitor? (sim/não) ')

if (age >= 16 && question == 'sim'){
  alert(`Você  tem ${age}, e esta apto a votar!`);
} 
else if (age >= 16 && question == 'não'){
  alert(`Você precisa de um titulo de eleitor para votar!`);
}
else if (age <= 16 && question == 'não' && question == 'sim'){
  alert(`Você tem ${age} anos e não tem a idade mínima para votar!`);
}
else{
  alert(`[ERRO]`);
}



