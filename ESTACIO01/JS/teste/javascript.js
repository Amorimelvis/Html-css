var numeros = [];

numeros[0] = solicitaPrimeiroNumero();
numeros[1] = solicitaSegundoNumero();

var resultadoDadivisao = divida(numeros);

alert("o resultado da divisao é:" + resultadoDadivisao)

/* Função em javascript
essa funçao nao recebe parametro
*/

function solicitaPrimeiroNumero()
{
    var numero1 = prompt("insira o primeiro numero")
    if(numero1 < 0)
    {
        alert("o numero precisa ser inteiro e positivo")
          //esse tipo de retorno, onde a propria funçao é chamada, é conhecida como recursiva
    return solicitaPrimeiroNumero()
    }
    else{ return numero1;}
}

function solicitaSegundoNumero(){
    var numero2 = prompt("insira o segundo numero")
    if(numero2 < 0) {
        alert("o numero precisa ser inteiro e positivo")
        return solicitaSegundoNumero()
    }
    else{ return numero2}
}

function divida(numeros){
    var resultado = 0;
    resultado = numeros[0] / numeros[1];
    return resultado;
}
