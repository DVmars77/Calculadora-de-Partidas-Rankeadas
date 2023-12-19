
/*Calculadora de Partidas ranqueadas

crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de ranqueadas deve ser feito através do cálculo (vitórias - derrotas)

se vitória for menor do que 10 = Ferro
se vitória for entre 11 e 20 = Bronze
se vitória for entre 21 e 50 = Prata
se vitória for entre 51 e 80 = Ouro
se vitória for entre 81 e 90 = Diamante
se vitória for entre 91 e 100 = Lendário
se vitória for maior ou igual a 101 = Imortal */


rankeadas()

function rankeadas(name, vitoria,derrota){
    let username = prompt("digite o nome do seu heroi: ");
    let vitorias = prompt("digite o numero de vitorias: ");
    let derrotas = prompt("digite o numero de derrotas: ");
    let calculo = vitorias - derrotas;
    
    
    if (calculo <= 10){
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Ferro")}
    
     else if (calculo >= 11 && calculo <= 20 ){
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Bronze")}
        
     else if (calculo >= 21 && calculo <= 50 ){
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Prata")}
    
     else if (calculo >= 51 && calculo <= 80 ){
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Ouro")}
        
     else if (calculo >= 81 && calculo <= 90 ){
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Diamante")}
        
     else if (calculo >= 91 && calculo <= 100 ){
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Lendario")}
        
   else{
        console.log("o heroi tem saldo de: " + calculo + " e esta no nivel: Imortal")} 
}