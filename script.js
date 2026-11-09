const perfis = [ 
    { 
        id: 1, 
        nome: "Curly", 
        categoria: "Administramento", 
        descricao: "Capitão da tripulação Tulpar.", 
        imagem: "Curlyprecrash.jpeg" 
    }, 
    { 
        id: 2, 
        nome: "Anya", 
        categoria: "Medicina", 
        descricao: "Enfermeira da tripulação Tulpar.", 
        imagem: "Anya_normal.jpeg" 
    },
    { 
        id: 3, 
        nome: "Swansea", 
        categoria: "Mecânica", 
        descricao: "Transforma problemas em soluções.", 
        imagem: "Swanseaportrait.jpeg" 
    }, 
    { 
        id: 4, 
        nome: "Daisuke", 
        categoria: "Ajudante", 
        descricao: "Transforma soluções em problemas.", 
        imagem: "Daisukeportrait.jpeg" 
    }, 
    { 
        id: 5, 
        nome: "Jimmy", 
        categoria: "Administramento", 
        descricao: "...", 
        imagem: "Jimmyportrait.jpeg" 
    }, 
]; 

function isValidYYYYMMDD(input) {
  const regex = /^\d{8}$/;
  if (!regex.test(input)) return false;
 
  const year = parseInt(input.substr(0, 4), 10);
  const month = parseInt(input.substr(4, 2), 10) - 1;
  const day = parseInt(input.substr(6, 2), 10);
 
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0'); // Day with leading zero
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (0-based, so add 1)
  const yyyy = today.getFullYear();

  let idade;

    if (mm < month) {
        if (dd < day ) {
            idade = yyyy-year-1;
        }
    }
    else {
        idade = yyyy-year;
    }
    return idade;
}

document.getElementById("login").addEventListener('click', function(){

   const input = document.getElementById("data").value;
   const idade = isValidYYYYMMDD(input);
      

});
const formulario = document.querySelector("#form");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const pontuacao = Array(perfis.length).fill(0);
  const respostas = formulario.querySelectorAll('select[id^="q"]');

  respostas.forEach((resposta) => {
    const id = Number(resposta.value);
    const indice = perfis.findIndex((perfil) => perfil.id === id);

    if (indice !== -1) {
      pontuacao[indice]++;
    }

    resultado.hidden = false;
    botaoRefazer.hidden = false;

    botaoRefazer.addEventListener("click", () => {
  formulario.reset();
  resultado.hidden = true;
  botaoRefazer.hidden = true;
   });
 });

const maiorPontuacao = Math.max(...pontuacao);
const indiceVencedor = pontuacao.indexOf(maiorPontuacao);
const personagem = perfis[indiceVencedor];

  const titulo = document.createElement("h2");
titulo.textContent = `Seu personagem é ${personagem.nome}!`;

const descricao = document.createElement("p");
descricao.textContent = personagem.descricao;

resultado.replaceChildren(titulo, descricao);
resultado.hidden = false;
});

const botaoRefazer = document.querySelector("#refazer");