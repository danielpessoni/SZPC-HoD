/* ===========================
   Configuração do autoplay
=========================== */

// Tempo de inatividade antes de ativar o autoplay.
const TEMPO_INATIVIDADE = 10000;

// Intervalo entre as trocas automáticas de slide.
const INTERVALO_AUTOPLAY = 5000;


/* ===========================
   Estado do autoplay
=========================== */

let temporizadorInatividade;
let intervaloAutoplay;


/* ===========================
   Função de inicialização
=========================== */

export function inicializarAutoplay(proximoSlide) {
    iniciarContagemInatividade(proximoSlide);
}


/* ===========================
   Registro de interação
=========================== */

export function registrarInteracao(proximoSlide) {
    desativarAutoplay();
    iniciarContagemInatividade(proximoSlide);
}


/* ===========================
   Contagem de inatividade
=========================== */

function iniciarContagemInatividade(proximoSlide) {
    clearTimeout(temporizadorInatividade);

    temporizadorInatividade = setTimeout(() => {
        ativarAutoplay(proximoSlide);
    }, TEMPO_INATIVIDADE);
}


/* ===========================
   Ativação do autoplay
=========================== */

function ativarAutoplay(proximoSlide) {
    if (intervaloAutoplay) {
        return;
    }

    intervaloAutoplay = setInterval(() => {
        proximoSlide();
    }, INTERVALO_AUTOPLAY);
}


/* ===========================
   Desativação do autoplay
=========================== */

function desativarAutoplay() {
    clearInterval(intervaloAutoplay);

    intervaloAutoplay = null;
}