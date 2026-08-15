/* ===========================
Módulos
=========================== */

import {
    proximoSlide,
    slideAnterior
} from "./carrossel.js";

import {
    registrarInteracao
} from "./autoplay.js";


/* ===========================
   Configuração do touch
=========================== */

// Distância mínima para considerar um movimento como swipe.
const DISTANCIA_MINIMA_SWIPE = 50;


/* ===========================
   Estado do touch
=========================== */

let posicaoInicialX = 0;
let posicaoInicialY = 0;


/* ===========================
   Inicialização
=========================== */

export function inicializarTouch() {
    if (!dispositivoPossuiTouch()) {
        return;
    }

    ocultarBotoesNavegacao();
    configurarTouch();
}


/* ===========================
   Detecção de touch
=========================== */

function dispositivoPossuiTouch() {
    return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    );
}


/* ===========================
   Configuração dos eventos
=========================== */

function configurarTouch() {
    const areaTouch = document.querySelector("main");

    if (!areaTouch) {
        return;
    }

    areaTouch.addEventListener(
        "touchstart",
        registrarInicioTouch,
        { passive: true }
    );

    areaTouch.addEventListener(
        "touchend",
        registrarFimTouch,
        { passive: true }
    );
}


/* ===========================
   Início do touch
=========================== */

function registrarInicioTouch(evento) {

    const toque = evento.changedTouches[0];

    posicaoInicialX = toque.clientX;
    posicaoInicialY = toque.clientY;
}


/* ===========================
   Fim do touch
=========================== */

function registrarFimTouch(evento) {

    const toque = evento.changedTouches[0];

    const deslocamentoX =
        toque.clientX - posicaoInicialX;

    const deslocamentoY =
        toque.clientY - posicaoInicialY;

    const deslocamentoHorizontal =
        Math.abs(deslocamentoX);

    const deslocamentoVertical =
        Math.abs(deslocamentoY);

    if (
        deslocamentoHorizontal < DISTANCIA_MINIMA_SWIPE ||
        deslocamentoHorizontal <= deslocamentoVertical
    ) {
        return;
    }

    if (deslocamentoX < 0) {
        registrarInteracao(proximoSlide);
        proximoSlide();
        return;
    }

    registrarInteracao(proximoSlide);
    slideAnterior();
}


/* ===========================
   Controles de navegação
=========================== */

function ocultarBotoesNavegacao() {
    const botaoAnterior =
        document.querySelector(".botao-anterior");

    const botaoProximo =
        document.querySelector(".botao-proximo");

    botaoAnterior.hidden = true;
    botaoProximo.hidden = true;
}