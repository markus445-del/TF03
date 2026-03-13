# TF03

# TF---DW---Aula-03---Node.js-Tipos-de-Refer-ncia-e-loops
# TF03.js

## 📚 Descrição

Este projeto foi desenvolvido como exercício prático de *JavaScript* com o objetivo de demonstrar o uso de *objetos, arrays e manipulação de referências*.

O código cria um objeto principal representando um aluno e utiliza diferentes estruturas da linguagem para explorar suas propriedades e comportamentos.

## 🎯 Objetivos do Exercício

O programa demonstra na prática:

* Criação e uso de *objetos (object)*
* Uso de *array dentro de um objeto*
* Iteração nas propriedades do objeto com *for...in*
* Iteração nos itens do array com *for...of*
* Comparação entre *tipos de referência*
* Exemplo de *cópia por referência*
* Exemplo de *cópia com spread operator (...)*
* Conversão do objeto para *JSON com JSON.stringify()*

## 🧱 Estrutura do Objeto

O objeto principal contém:

* nome → nome do aluno
* idade → idade do aluno
* curso → curso que o aluno está fazendo
* disciplinas → array contendo as matérias do aluno

Exemplo:

javascript
const aluno = {
  nome: "Markus",
  idade: 21,
  curso: "Análise e Desenvolvimento de Sistemas",
  disciplinas: ["JavaScript", "Banco de Dados", "Desenvolvimento Web"]
};


## ⚙️ Funcionalidades Demonstradas

### 1. Iteração de propriedades

Uso do *for...in* para percorrer as propriedades do objeto.

### 2. Iteração de array

Uso do *for...of* para percorrer os itens do array disciplinas.

### 3. Comparação de objetos

Mostra como objetos em JavaScript são comparados por *referência na memória*.

### 4. Cópia por referência

Demonstra que duas variáveis podem apontar para *o mesmo objeto*.

### 5. Cópia com Spread Operator

Criação de uma *cópia independente do objeto* usando:

javascript
const copia = { ...objeto };


### 6. Conversão para JSON

Transformação do objeto em string JSON usando:

javascript
JSON.stringify(objeto);


## ▶️ Como Executar

1. Instale o *Node.js* (se ainda não tiver).
2. Salve o arquivo como:


index.js


3. Execute no terminal:


node index.js


## 📌 Saída Esperada

O programa exibirá no terminal:

* O objeto criado
* A lista de propriedades
* As disciplinas iteradas
* Comparações entre objetos
* Demonstração de cópia por referência
* Demonstração de cópia com spread operator
* O objeto convertido para JSON