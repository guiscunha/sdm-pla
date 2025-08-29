// // função declarativa
// function saudacao(nome) {
//     return `Olá, ${nome}!`
// }

// console.log(saudacao("Danilo"));

// // função anônima

// const soma = function(a, b) {
//     return a + b;
// }
// function simples(){
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     console.log("O valor de c é: " + c);

// }
// function somar(a, b) {
//     return a + b;
// }

// console.log(somar(5, 10));

// function DescobrirIdade(idade){
//     console.log("A idade é: " + idade)
// }   

// console.log(DescobrirIdade(25))

const altura = function(altura){
    return 2
}
//    altura(2)

const curso = (curso) => "Ads";


function imprimir(idade, altura, curso){
 
    console.log(idade, altura, curso)
}

imprimir(7, altura(), curso())

function cumprimentar(nome = "Danilo"){
} 

(function(){
    console.log("Função de auto-invocada");
})();

function processar(valor, callback){
    const resultado = callback(valor);
    console.log(`Resultado: ${resultado}`);
}

async function processarAsync(valor, callback){
    const resultado = await callback(valor);
    console.log(`Resultado async: ${resultado}`);
    
}

