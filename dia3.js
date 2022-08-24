jogo ()
especializacao ()

function jogo() {
  let area = prompt("Olá! Qual área você quer seguir?\n1-Front-end\n2-Back-end")
  if (area == "1") {
    front ()
  } else if (area == "2") {
    back ()
  } else {
    alert("Opção inválida, tente novamente, escolha 1 ou 2")
    jogo()
  }
}

function front() {
  let frontend = prompt("Você quer aprender:\n1-React\n2-Vue")
  if (frontend == "1") {
    alert("Legal! Você vai gostar muito de React!")
  } else if (frontend == "2") {
    alert("Que maravilha, Vue é muito interessante!")
  } else {
    alert("Opção inválida, tente novamente, escolha 1 ou 2")
    front()
  }
}

function back() {
  let backend = prompt("Você quer aprender:\n1-C#\n2-Java")
  if (backend == "1") {
    alert("C# é muito versátil, você vai adorar!")
  } else if (backend == "2") {
    alert("Muito bem, Java é incrível!")
  } else {
    alert("Opção inválida, tente novamente, escolha 1 ou 2")
    front()
  }
}

function especializacao() {
  let espec = prompt("Você prefere:\n1-Especializar na área\n2-Estudar para ser FullStack")
   if (espec == "1") {
    alert("É muito bom seguir uma área específica e aprimorar suas habilidades")
  } else if (espec == "2") {
    alert("Que bom que você quer explorar novos horizontes, o universo é infinito!")
  } else {
    alert("Opção inválida, tente novamente, escolha 1 ou 2")
    front()
  }
}

let mais = prompt("Quais tecnologias você gostaria de conhecer melhor?\n1-React\n2-Vue\n3-C#\n4-Java\n5-Não quero aprender mais.")
        while (mais <= 4){
            detalhes()
            mais = prompt("Quais tecnologias você gostaria de conhecer melhor?\n1-React\n2-Vue\n3-C#\n4-Java\n5-Não quero aprender mais.")
        }

function detalhes() {
  if (mais == "1") {
    alert("Legal, você sabia que o React é uma biblioteca JavaScript?")
  } if (mais == "2") {
    alert("Vue.js é um framework JavaScript focado no desenvolvimento de interfaces de usuário e aplicativos de página única.")
  } if (mais == "3") {
    alert("C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET.")
  } if (mais == "4") {
    alert("Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90.")
  } 
}
  




