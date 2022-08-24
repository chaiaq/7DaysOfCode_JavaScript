
/*Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.*/



let frutas = []
let laticinios = []
let congelados = []
let doces = []

let adicionar = prompt("Deseja adicionar uma comida a lista ou remover?\n1-Adicionar\n2-Remover\n3-Sair")
while (adicionar == "1") {
  let item = prompt("Digite qual alimento quer adicionar:")
  let categoria = prompt("Adicionar em qual lista?\n1-Frutas\n2-Laticínios\n3-Congelados\n4-Doces")
  if (categoria == "1") {
    frutas.push(item)
  } else if (categoria == "2") {
    laticinios.push(item)
  } else if (categoria == "3") {
    congelados.push(item)
  } else if (categoria == "4") {
    doces.push(item)
  } else {
    alert("Opção inválida, tente novamente")
    categoria = prompt("Adicionar em qual lista?\n1-Frutas\n2-Laticínios\n3-Congelados\n4-Doces")
  }
  adicionar = prompt("Deseja adicionar uma comida a lista ou remover?\n1-Adicionar\n2-Remover\n3-Sair")
}

while (adicionar == "2") {
  if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {
    alert("A lista ainda está vazia :s")
    break
  } else {
  let remover = prompt("A lista de compras é a seguinte:\nFrutas: " + frutas + "\nLaticínios: " + laticinios + "\nCongelados: " + congelados + "\nDoces: " + doces + "\nQual item você quer remover?")
  if (frutas.indexOf(remover) != -1) {
    let pos = frutas.indexOf(remover)
    frutas.splice(pos, 1)
  } else if (laticinios.indexOf(remover) != -1) {
    let pos = laticinios.indexOf(remover)
    laticinios.splice(pos, 1)
  } else if (congelados.indexOf(remover) != -1) {
    let pos = congelados.indexOf(remover)
    congelados.splice(pos, 1)
  } else if (doces.indexOf(remover) != -1) {
    let pos = doces.indexOf(remover)
    doces.splice(pos, 1)
  }
  
  alert("O item " + remover + " foi removido com sucesso!")
  adicionar = prompt("Deseja adicionar uma comida a lista ou remover?\n1-Adicionar\n2-Remover\n3-Sair")
  }
}


alert("A lista de compras é a seguinte:\nFrutas: " + frutas + "\nLaticínios: " + laticinios + "\nCongelados: " + congelados + "\nDoces: " + doces)



