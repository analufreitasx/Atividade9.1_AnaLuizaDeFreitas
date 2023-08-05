var vz = 0, soma = 0
while(vz < 4){

    var num = parseInt (prompt('Este site executa o cálculo da soma e média de 4 números. \nDigite um número:'))
    soma = soma + num
    vz ++
}

alert("A soma dos números digitados é igual a " + soma + ". \nA média dos números digitados é igual a " + (soma/4) + ".")