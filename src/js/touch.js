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
    atualizarInterfaceTouch();
    configurarTouch();
    configurarDeteccaoTouch();
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
   Monitoramento do dispositivo
=========================== */

function configurarDeteccaoTouch() {
    window.addEventListener(
        "resize",
        atualizarInterfaceTouch
    );
}


/* ===========================
   Atualização da interface
=========================== */

function atualizarInterfaceTouch() {
    const possuiTouch = dispositivoPossuiTouch();

    const botaoAnterior =
        document.querySelector(".botao-anterior");

    const botaoProximo =
        document.querySelector(".botao-proximo");

    if (!botaoAnterior || !botaoProximo) {
        return;
    }

    botaoAnterior.hidden = possuiTouch;
    botaoProximo.hidden = possuiTouch;
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