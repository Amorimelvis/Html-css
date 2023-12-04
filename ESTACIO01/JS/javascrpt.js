var a = 10;
var b = 3;
console.log ("If com uma única condição")

if (a < b){
    console.log ("a é menor que b");}

    if (a == b){
        console.log("a é igual a b"); 
     }

     if (a < b){
        console.log("a é menor que b");
    }
    if (b < a){
        console.log("b é menor que a");
    }


    //operadores lógicos AND ( && ) e OR ( || )

    var c = 5;
    var d = -1;

    console.log("If com duas condiçoes, ambas precisam ser verdadeiras")

    if (c > d && d > 0){
        console.log("c é maior que d e d é um numero positivo")
    }

    
    //essa é a condição correta, por isso é executada no console
    if ( c > d && d < c ){
        console.log(" c é maior que d e d é um numero negativo")
    }


    // apartir daqui uma das condiçoes precisa ser verdedaeira
    console.log("if com duas condições, onde pelo menos uma precisa ser verdadeira:")

    if (c > d || d > 0){
        console.log("c é menor que d OU d é um número positivo")
    }

    if (c < d || d <= 0){
        console.log("c é menor que d OU d não é um número positivo");
    }

    //Por fim, no emulador a seguir, temos a estrutura if sendo usada de uma maneira mais elaborada, com mais de duas condições, combinação dos operadores && e II, assim como o uso do operador lógico de negação NOT ( ! ):

    var c = 5;
    var d = -1
    var e = false //valores possíveis -> True, False


    console.log("if com mais de duas condições e combinação de && e ||:")

    if((c > d && d > 0) || (c > d && d <= 0 )){
        console.log("c é maior que d E d é um número positivo")
        console.log("OU")
        console.log("c é maior que d E d não é um número positivo")
    }
    console.log("if com condição não verdadeira:");
if (!e){
    console.log("e tem valor false");
}

var a = 10;
 var b = 3;

 console.log ("if com uma única condição:");
 if (a > b){
	console.log("a é maior que b");
 } else if (a == b){
	console.log("a é igual a b"); 
 } else if (a < b){
	console.log("a é menor que b");
 } else if (b < a){
	console.log("b é menor que a");
 }

 // apartir daqui começa um topico de repetição o ++
 var contador;
for (contador = 1; contador <= 10; contador ++){
    //As instruções incluídas aqui serão executadas 10 vezes
    /*
    Será exibido o valor da variável contador 10 vezes 
    no Console. O primeiro número será 0 e o último será 9 
    (repare que começamos com a nossa variável contador 
    recebendo o número 0 e sendo incrementada 
    até ser menor do que 10, ou seja, até o número 9.
    */
    console.log(contador);
}

//Apartir daqui temos o uso do "WHILE"

var contador = 0;
while(contador < 10){
    console.log(contador);
    contador ++;
}

//apartir daqui teremos o uso do "do/while"
var contador = 0;
do{
    console.log(contador);
    contador += 1;
}
while(contador < 10)

var frutas = ['Laranja', 'Uva', 'Pera'];
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
for(var i = 0; i < frutas.length; i++){
	console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in'*/
for(var fruta in frutas){
	console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
}

// case swith

let atleta = 12

switch (atleta){
    case 1: 
    console.log("Pirmeiro lugar");
    break

    case 2:
        console.log("Segundo lugar");
        break

    case 3:
        console.log("terceiro lugar");
        break
case 4: case 5: case 6:
    console.log("Não passou nem perto");
        break


        default:
        console.log("Nao subiu ao podio");
        break

        
}

var frutas = ['Laranja', 'Uva', 'Limão'];
delete frutas [0]{
    console.log(length)
}

    



