/* Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?*/

const nome = prompt("Qual o seu nome?")
const idade = prompt("Quantos anos você tem?")
const linguagem = prompt("Qual linguagem de programação você está estudando?")

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem)

const escolha = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")
 if(escolha == "1") {
   alert("Muito bom! Continue estudando e você terá muito sucesso.")
 } else if(escolha == "2") {
     alert("Ahh que pena... Já tentou aprender outras linguagens?")
 } else {
     alert("Opa, não entendi sua resposta, mas continue estudando!")
 }
