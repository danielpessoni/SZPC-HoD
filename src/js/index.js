/* ===========================
   Dados dos dragões
=========================== */

const dragoes = [
  {
    nome: "Balerion",
    imagem: "./src/imagens/balerion.png",
    descricao:
      "Balerion, chamado de Terror Negro, foi um dragão da Casa Targaryen. Ele foi montado pelo rei Aegon I Targaryen durante a Guerra da Conquista."
  },

  {
    nome: "Syrax",
    imagem: "./src/imagens/syrax.png",
    descricao:
      "Syrax foi uma dragão-fêmea. Ela foi montada exclusivamente por Rhaenyra Targaryen. Seu nome veio de uma deusa de Valíria."
  },

  {
    nome: "Arrax",
    imagem: "./src/imagens/arrax.png",
    descricao:
      "Arrax foi um dragão montado pelo Príncipe Lucerys Velaryon durante a Dança dos Dragões."
  },

  {
    nome: "Caraxes",
    imagem: "./src/imagens/caraxes.png",
    descricao:
      "Caraxes, também chamado de Wyrm de Sangue e Verme Sangrento, foi o dragão montado pelo Príncipe Aemon Targaryen durante o reinado do Rei Jaehaerys I Targaryen e, mais tarde, pelo Príncipe Daemon Targaryen."
  },

  {
    nome: "Seasmoke",
    imagem: "./src/imagens/seasmoke.png",
    descricao:
      "Seasmoke era um dragão cinza-claro. Era grande o bastante para combate durante a dança, mas ainda um jovem dragão, e mais ágil no ar do que seus irmãos mais velhos."
  },

  {
    nome: "Vermax",
    imagem: "./src/imagens/vermax.png",
    descricao:
      "Vermax foi o dragão montado pelo príncipe Jacaerys Velaryon. Ele prosperava e crescia a cada ano. O dragão ficou mal-humorado quando próximo de neve, gelo e frio. A cor de Vermax não é descrita nos livros."
  },

  {
    nome: "Vhagar",
    imagem: "./src/imagens/vhagar.png",
    descricao:
      "Vhagar foi uma dragão-fêmea montada por Visenya durante a Conquista, ao lado do Balerion de Aegon o Conquistador e o Meraxes de sua irmã Rhaenys."
  }
];


/* ===========================
   Estado do carrossel
=========================== */

let indiceAtual = 0;


/* ===========================
   Elementos da página
=========================== */

const carrossel = document.querySelector(".carrossel");
const informacoes = document.querySelector(".informacoes");
const botoesCarrossel = document.querySelector(".botoes-carrossel");


/* ===========================
   Renderização inicial
=========================== */

function renderizarCarrossel() {
  renderizarImagens();
  renderizarInformacoes();
  renderizarBotoes();

  trocarSlide(indiceAtual);
}


/* ===========================
   Renderização das imagens
=========================== */

function renderizarImagens() {
  dragoes.forEach((dragao) => {
    const imagem = document.createElement("img");

    imagem.classList.add("imagem");
    imagem.src = dragao.imagem;
    imagem.alt = `Dragão ${dragao.nome}`;

    carrossel.appendChild(imagem);
  });
}


/* ===========================
   Renderização das informações
=========================== */

function renderizarInformacoes() {
  dragoes.forEach((dragao) => {
    const informacao = document.createElement("div");
    const titulo = document.createElement("h1");
    const descricao = document.createElement("p");

    informacao.classList.add("informacao");

    titulo.textContent = dragao.nome;

    descricao.classList.add("descricao");
    descricao.textContent = dragao.descricao;

    informacao.appendChild(titulo);
    informacao.appendChild(descricao);

    informacoes.appendChild(informacao);
  });
}


/* ===========================
   Renderização dos botões
=========================== */

function renderizarBotoes() {
  dragoes.forEach((dragao, indice) => {
    const botao = document.createElement("button");

    botao.classList.add("botao");

    botao.type = "button";
    botao.setAttribute("aria-label", `Mostrar ${dragao.nome}`);
    botao.setAttribute("aria-current", "false");

    botao.addEventListener("click", () => {
      trocarSlide(indice);
    });

    botoesCarrossel.appendChild(botao);
  });
}


/* ===========================
   Troca de slide
=========================== */

function trocarSlide(indice) {
  indiceAtual = indice;

  atualizarImagem();
  atualizarInformacao();
  atualizarBotoes();
}


/* ===========================
   Atualização da imagem
=========================== */

function atualizarImagem() {
  const imagens = document.querySelectorAll(".imagem");

  imagens.forEach((imagem, indice) => {
    imagem.classList.toggle("ativa", indice === indiceAtual);
  });
}


/* ===========================
   Atualização das informações
=========================== */

function atualizarInformacao() {
  const informacoesDragoes = document.querySelectorAll(".informacao");

  informacoesDragoes.forEach((informacao, indice) => {
    informacao.classList.toggle("ativa", indice === indiceAtual);
  });
}


/* ===========================
   Atualização dos botões
=========================== */

function atualizarBotoes() {
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach((botao, indice) => {
    const selecionado = indice === indiceAtual;

    botao.classList.toggle("selecionado", selecionado);

    botao.setAttribute(
      "aria-current",
      selecionado ? "true" : "false"
    );
  });
}


/* ===========================
   Próximo slide
=========================== */

function proximoSlide() {
  const proximoIndice = (indiceAtual + 1) % dragoes.length;

  trocarSlide(proximoIndice);
}


/* ===========================
   Slide anterior
=========================== */

function slideAnterior() {
  const indiceAnterior =
    (indiceAtual - 1 + dragoes.length) % dragoes.length;

  trocarSlide(indiceAnterior);
}


/* ===========================
   Inicialização
=========================== */

renderizarCarrossel();



// const botoesCarrossel = document.querySelectorAll(".botao");
// const imagens = document.querySelectorAll(".imagem");
// const informacoes = document.querySelectorAll(".informacoes");

// botoesCarrossel.forEach((botao, indice) => {
//   botao.addEventListener("click", () => {
//     desativarBotaoSelecionado();
//     marcarBotaoSelecionado(botao);
//     esconderImagemAtiva();
//     mostrarImagemDeFundo(indice);
//     esconderInformacoesAtivas();
//     mostrarInformacoes(indice);
//   });
// });

// function marcarBotaoSelecionado(botao) {
//     botao.classList.add("selecionado");
// }

// function mostrarInformacoes(indice) {
//   informacoes[indice].classList.add("ativa");
// }

// function esconderInformacoesAtivas() {
//   const informacoesAtiva = document.querySelector(".informacoes.ativa");
//   informacoesAtiva.classList.remove("ativa");
// }

// function mostrarImagemDeFundo(indice) {
//   imagens[indice].classList.add("ativa");
// }

// function esconderImagemAtiva() {
//   const imagemAtiva = document.querySelector(".ativa");
//   imagemAtiva.classList.remove("ativa");
// }

// function desativarBotaoSelecionado() {
//   const botaoSelecionado = document.querySelector(".selecionado");
//   botaoSelecionado.classList.remove("selecionado");
// }
