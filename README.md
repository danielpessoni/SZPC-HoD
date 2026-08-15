# 🐉 House of the Dragon — Slider Temático

Interface interativa e responsiva desenvolvida originalmente como projeto prático durante a **Semana do Zero ao Programador Contratado (SZPC)**, promovida pelos mentores da escola **Dev em Dobro**. O projeto consiste em um mostruário dinâmico dos dragões da série *House of the Dragon*, alterando planos de fundo e blocos informativos em sincronia.

Após sua criação, o projeto passou por uma etapa de refatoração e aprimoramento, incorporando novas formas de navegação, reprodução automática e uma estrutura JavaScript modular.

---

## 🕹️ Funções Existentes

A aplicação utiliza diferentes formas de interação para navegação entre os dragões:

- **Carrossel de Imagens Sincronizado:** Alteração do plano de fundo em tela cheia (`100vh`) com base na seleção do usuário.
- **Troca de Contexto Informativo:** Atualização simultânea do título e da descrição do dragão ativo ao alternar os controles.
- **Controles de Navegação:** Botões de avançar e retroceder, além de indicadores circulares que permitem selecionar diretamente o dragão desejado.
- **Navegação por Teclado:** Suporte às teclas `←`, `→`, `Home` e `End` para controle do carrossel.
- **Navegação por Touch:** Em dispositivos com suporte a toque, gestos horizontais permitem avançar ou retroceder entre os dragões.
- **Autoplay:** Após um período de inatividade, o carrossel inicia automaticamente a troca dos dragões em intervalos definidos.
- **Pausa após Interação:** Qualquer navegação manual interrompe o autoplay e reinicia a contagem de inatividade.
- **Animação de Transição:** Efeito suave de opacidade (`@keyframes`) aplicado à entrada de cada nova imagem de fundo.

---

## 💻 Recursos de Código

A estrutura do projeto utiliza práticas de desenvolvimento web estruturado, com separação de responsabilidades entre os módulos:

- **Manipulação do DOM:** Uso de métodos como `querySelector`, `querySelectorAll`, `createElement` e `forEach` para criação, atualização e controle dos elementos da interface.
- **JavaScript Modular:** Separação das responsabilidades em módulos independentes para os dados dos dragões, controle do carrossel, autoplay e navegação por touch, utilizando `import` e `export`.
- **Gerenciamento de Estado:** Controle do índice atual do carrossel e sincronização entre imagem, informações, indicadores e contador.
- **Temporizadores:** Utilização de `setTimeout`, `setInterval`, `clearTimeout` e `clearInterval` para gerenciamento da inatividade e do autoplay.
- **Eventos de Interação:** Implementação de eventos de clique, teclado e touch para diferentes formas de navegação.
- **Camadas Visuais com Pseudo-elementos:** Aplicação de uma máscara de gradiente linear escura usando o pseudo-elemento `::after` diretamente no escopo do layout para garantir o contraste e a leitura dos textos brancos sobre as imagens.
- **Tipografia Customizada:** Incorporação nativa de fonte externa via diretiva CSS `@font-face` para renderização da tipografia estilizada da série (`GOT.ttf`).

---

## 🛠️ Stacks Utilizadas

- **HTML5:** Estrutura declarativa da página, imagens, informações e controles de interação.
- **CSS3:** Estilização estruturada com uso de posicionamentos fixos, gerenciamento de profundidade de tela (`z-index`), CSS Grid, Flexbox, animações e regras responsivas com media queries.
- **JavaScript (Vanilla JS):** Desenvolvimento manual da lógica de interatividade, manipulação do DOM, gerenciamento de eventos, temporizadores e modularização utilizando ES Modules.

---

## 🎯 Contexto e Propósito Histórico

Este repositório mantém seu papel histórico no portfólio. Desenvolvido originalmente durante um evento imersivo voltado a iniciantes e antes do aprofundamento dos estudos em desenvolvimento de software, o projeto serviu como um exercício inicial de introdução à construção de interfaces web e à lógica de programação.

Posteriormente, o projeto foi utilizado como exercício de **refatoração e aprimoramento**, permitindo aplicar conhecimentos adquiridos durante os estudos. Entre as melhorias realizadas estão a modularização do JavaScript, a implementação de autoplay, navegação por teclado e touch, além de ajustes de responsividade e organização do código.

Dessa forma, o projeto permanece como um registro do processo de aprendizado prático, mas também demonstra a evolução da implementação original para uma estrutura mais organizada, modular e completa.

O repositório original dos mentores pode ser encontrado [**AQUI**](https://github.com/devemdobro/projeto-hod-szpc)