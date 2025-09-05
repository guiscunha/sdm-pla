let numeros = [1, 2, 3, 4, 5];
console.log("array original: " + numeros);
console.log(numeros[0]); // Acessando o primeiro elemento do array
console.log(numeros[2]); // Acessando o terceiro elemento do array


let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // Adicionando um elemento ao final do array
frutas.unshift("morango"); // Adicionando um elemento ao início do array
console.log(frutas);

frutas.forEach((fruta, indice) => {
    console.log(`Fruta na posição ${indice}: ${fruta}`);
});

let misto = [42, "teste", true, {nome: "Danilo"}, [1, 2, 3]];

console.log(misto);
console.log("array misto", misto.length); // Tamanho do array misto
console.log(misto[misto.length - 1]); // Acessando o último elemento do array misto

for (let i = 0; i < misto.length; i++) {
    console.log(`Elemento na posição ${i}: ${misto[i]}`);
}

for(let fruta of frutas){
    console.log(fruta);
}

for (let indice in frutas){
    console.log(`Fruta na posição ${indice}: ${frutas[indice]}`);
}

frutas.pop(); // Remove o último elemento
frutas.shift(); // Remove o primeiro elemento
frutas.splice(1, 1); // Remove 1 elemento a partir do índice 1
    console.log(frutas);

    let mapa = new Map();
    mapa.set("nome", "Danilo");
    mapa.set("idade", 39);
    mapa.set("altura", 1.78);

    console.log(mapa.get("nome")); // Acessando valor pela chave
    console.log(mapa.has("idade")); // Verificando se a chave existe
    console.log(mapa.size); // Tamanho do mapa

    mapa.delete("nome"); // Removendo um par chave-valor
    mapa.clear(); // Limpando todo o mapa
    console.log(mapa.size); // Tamanho do mapa após limpeza

    let conjunto = new Set([1, 2, 3, 4, 5, 6]);
    console.log(conjunto)
    conjunto.add(7); // Adicionando um elemento
    conjunto.delete(2); // Removendo um elemento

    conjunto.forEach(valor => console.log(valor));

    let pessoas = {
        nome: "Danilo",
        idade: 39,
        altura: 1.78,
        profissao: "Desenvolvedor",
        endereco:{
            rua: "Rua A",
            numero: 123,
            cidade: "São Paulo"
        }
    }

    console.log(pessoas.nome); // Acessando propriedade
    console.log(pessoa["idade"]); // Acessando propriedade
    console.log(pessoas.endereco.cidade); // Acessando propriedade aninhada

    delete pessoas.profissao; // Removendo propriedade