/* ===========================
   Módulos
=========================== */

import { dragoes } from "./dragoes.js";

import {
    inicializarAutoplay,
    registrarInteracao
} from "./autoplay.js";


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

const botaoAnterior = document.querySelector(".botao-anterior");
const botaoProximo = document.querySelector(".botao-proximo");
const contadorCarrossel = document.querySelector(".contador-carrossel");


/* ===========================
   Renderização inicial
=========================== */

export function inicializarCarrossel() {
    renderizarImagens();
    renderizarInformacoes();
    renderizarBotoes();

    configurarControles();

    trocarSlide(indiceAtual);

    inicializarAutoplay(proximoSlide);
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
   Renderização dos indicadores
=========================== */

function renderizarBotoes() {
    dragoes.forEach((dragao, indice) => {
        const botao = document.createElement("button");

        botao.classList.add("botao");

        botao.type = "button";
        botao.setAttribute(
            "aria-label",
            `Mostrar ${dragao.nome}`
        );

        botao.setAttribute("aria-current", "false");

        botao.addEventListener("click", () => {
            registrarInteracao(proximoSlide);
            trocarSlide(indice);
        });

        botoesCarrossel.appendChild(botao);
    });
}


/* ===========================
   Configuração dos controles
=========================== */

function configurarControles() {
    botaoAnterior.addEventListener("click", () => {
        registrarInteracao(proximoSlide);
        slideAnterior();
    });

    botaoProximo.addEventListener("click", () => {
        registrarInteracao(proximoSlide);
        proximoSlide();
    });

    document.addEventListener("keydown", controlarTeclado);
}


/* ===========================
   Controle pelo teclado
=========================== */

function controlarTeclado(evento) {
    switch (evento.key) {
        case "ArrowLeft":
            evento.preventDefault();
            registrarInteracao(proximoSlide);
            slideAnterior();
            break;

        case "ArrowRight":
            evento.preventDefault();
            registrarInteracao(proximoSlide);
            proximoSlide();
            break;

        case "Home":
            evento.preventDefault();
            registrarInteracao(proximoSlide);
            trocarSlide(0);
            break;

        case "End":
            evento.preventDefault();
            registrarInteracao(proximoSlide);
            trocarSlide(dragoes.length - 1);
            break;
    }
}


/* ===========================
   Troca de slide
=========================== */

function trocarSlide(indice) {
    indiceAtual = indice;

    atualizarImagem();
    atualizarInformacao();
    atualizarBotoes();
    atualizarContador();
}


/* ===========================
   Atualização da imagem
=========================== */

function atualizarImagem() {
    const imagens = document.querySelectorAll(".imagem");

    imagens.forEach((imagem, indice) => {
        imagem.classList.toggle(
            "ativa",
            indice === indiceAtual
        );
    });
}


/* ===========================
   Atualização das informações
=========================== */

function atualizarInformacao() {
    const informacoesDragoes =
        document.querySelectorAll(".informacao");

    informacoesDragoes.forEach((informacao, indice) => {
        informacao.classList.toggle(
            "ativa",
            indice === indiceAtual
        );
    });
}


/* ===========================
   Atualização dos indicadores
=========================== */

function atualizarBotoes() {
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach((botao, indice) => {
        const selecionado = indice === indiceAtual;

        botao.classList.toggle(
            "selecionado",
            selecionado
        );

        botao.setAttribute(
            "aria-current",
            selecionado ? "true" : "false"
        );
    });
}


/* ===========================
   Atualização do contador
=========================== */

function atualizarContador() {
    const numeroAtual = String(
        indiceAtual + 1
    ).padStart(2, "0");

    const numeroTotal = String(
        dragoes.length
    ).padStart(2, "0");

    contadorCarrossel.textContent =
        `${numeroAtual} / ${numeroTotal}`;
}


/* ===========================
   Próximo slide
=========================== */

export function proximoSlide() {
    const proximoIndice =
        (indiceAtual + 1) % dragoes.length;

    trocarSlide(proximoIndice);
}


/* ===========================
   Slide anterior
=========================== */

export function slideAnterior() {
    const indiceAnterior =
        (indiceAtual - 1 + dragoes.length) %
        dragoes.length;

    trocarSlide(indiceAnterior);
}