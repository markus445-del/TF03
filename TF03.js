const aluno = {
    nome: "Markus",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas",
    disciplinas: ["JavaScript", "Banco de Dados", "Desenvolvimento Web"]
};

console.log("Objeto aluno criado:");
console.log(aluno);


console.log("\n2) Acessando o array dentro do objeto...");

console.log("Disciplinas do aluno:");
console.log(aluno.disciplinas);


console.log("\n3) Iterando propriedades do objeto com for...in:");

for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
}


console.log("\n4) Iterando disciplinas com for...of:");

for (let disciplina of aluno.disciplinas) {
    console.log("Disciplina:", disciplina);
}


console.log("\n5) Comparação entre objetos (referência):");

const alunoReferencia = aluno;

console.log("aluno === alunoReferencia ?", aluno === alunoReferencia);
console.log("Resultado TRUE porque ambos apontam para o mesmo objeto.");


console.log("\n6) Exemplo de cópia por referência:");

alunoReferencia.nome = "Pedro";

console.log("Nome em aluno:", aluno.nome);
console.log("Nome em alunoReferencia:", alunoReferencia.nome);

console.log("Alterar um objeto altera o outro, pois é a mesma referência.");

console.log("\n7) Criando cópia com spread operator:");

const alunoCopia = { ...aluno };

alunoCopia.nome = "Mariana";

console.log("Nome no objeto original:", aluno.nome);
console.log("Nome no objeto copiado:", alunoCopia.nome);

console.log("Agora são objetos diferentes.");

console.log("\n8) Convertendo objeto para JSON:");

const alunoJSON = JSON.stringify(aluno);

console.log("JSON gerado:");
console.log(alunoJSON);