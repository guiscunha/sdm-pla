var nome = "danilo"
console.log(nome)
const altura = 1.78
let idade = 39
idade = 25

console.log(" Meu nome é " + nome + ", minha altura é " + altura + " e minha idade é " + idade + " anos. ")

// String

let texto = "String"

// Number

let numero = 10
let numero2 = 10.5

// boolean

let booleano = true
let booleano2 = false

// null

let nulo = null

// undefined

let indefinido = undefined

// object

let objeto = {nome: "Danilo", idade: 39, altura: 1.78}

// array

let lista = ["uva", "maçã", "banana", "laranja", "abacaxi", "pera", "kiwi", "morango", "melancia", "caju", "mamão", "goiaba", "abacate", "cabelinho de milho", "cabelinho de milho com queijo coalho"]

// Conversão de tipos de dados

// String -> Números

let stringPraNumero = Number("10")
let stringPraNumero2 = parseInt("10.5") // converte para inteiro
let stringPraNumero3 = parseFloat("10.5") // converte para float

// Números -> String

let str = String(100);
let str2 = (100).toString();

// boolean -> Número

let booleanPraNumero = Number(true); // 1
let booleanPraNumero2 = Number(false); // 0