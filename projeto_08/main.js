let grade = prompt('Digite a nota dp aluno: ')

if (grade > 100){
  alert('[ERRO] Nota invalida!')
} 
else if (grade >= 90){
  alert('Nota A')
}
else if (grade >= 80){
  alert('Nota B')
}
else if (grade >= 70){
  alert('Nota C')
}
else if (grade >= 60){
  alert('Nota D')
}
else {
  alert('Nota F')
}



