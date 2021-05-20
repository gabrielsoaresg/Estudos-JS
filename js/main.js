/*var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].cor);*/
/*var nome = "Gabriel Soares Gomes";
var n1 = 18;
var n2 = 20;
var frase = "Corinthians é o melhor time do mundo"
//alert("Bem vindo, " + nome + " você tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toLowerCase());*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.join(" "));
/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    count ++;
}*/
/*var count;
for(count = 0; count <= 6; count++){
    alert(count);
}*/
//var d = new Date();
//alert(d.getMinutes());
/*var lista = ["Alemanha", "Inglaterra", "Escócia"];
lista.push("Polônia");
lista.pop("Inglaterra");
console.log(lista);*/

/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("http://www.fatecguarulhos.edu.br");
}
function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado!";
    elemento.innerHTML = "Obrigado!";
}

function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}