/*Você praticou muita coisa sobre lógica de programação com Javascript, mas ainda falta uma coisa muito importante: organizar o seu código.

E sim, isso é algo obrigatório para aprender como pessoa desenvolvedora, pois uma hora ou outra na sua carreira você vai precisar dar manutenção no seu código criado, ou até ajeitar algo no código que outra pessoa escreveu.

Imagina só se esse código estiver todo bagunçado?

Uma ótima prática é sempre separar cada trecho do seu código que realizará alguma função específica em blocos de código ainda menores, que poderão ser reutilizados e chamados a qualquer outro momento ao longo do seu programa. São as chamadas funções.

Para o exercício de hoje: você já parou para pensar como uma calculadora funciona?

Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?

Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".*/

function soma(valor1, valor2) {
    return Number(valor1) + Number(valor2)
  }
  
  function sub(valor1, valor2) {
    return Number(valor1) - Number(valor2)
  }
  
  function multi(valor1, valor2) {
    return Number(valor1) * Number(valor2)
  }
  
  function divisao(valor1, valor2) {
    return Number(valor1) / Number(valor2)
  }
  
  let valor2 = ""
  let valor1 = ""
  let operacao = ""
  
  function calculo() {
    operacao = prompt("Qual operação você deseja fazer?\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Sair")
    if (operacao == "5") {
      alert("Certo, até a próxima!")
    } else if (operacao != "1" && operacao != "2" && operacao != "3" && operacao != "4" && operacao != "5") {
      alert("Opção inválida, tente novamente!")
      operacao = prompt("Qual operação você deseja fazer?\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Sair")
    } else {
      valor1 = prompt("Digite o primeiro valor:")
      valor2 = prompt("Digite o segundo valor:")
      switch (operacao) {
      case "1":
        alert("O resultado da soma é " + soma(valor1, valor2))
        break
      case "2":
        alert("O resultado da subtração é " + sub(valor1, valor2))
        break
      case "3":
        alert("O resultado da multiplicação é " + multi(valor1, valor2))
        break
      case "4":
        alert("O resultado da divisão é " + divisao(valor1, valor2))
        break
    }
      
    }
  }
  
   
  calculo ()