# 🐉 House of the Dragon — Slider Temático

Interface interativa e responsiva desenvolvida como projeto prático durante a **Semana do Zero ao Programador Contratado (SZPC)**, promovida pelos mentores da escola **Dev em Dobro**. O projeto consiste em um mostruário dinâmico dos dragões da série *House of the Dragon*, alterando planos de fundo e blocos informativos em sincronia.

---

## 🕹️ Funções Existentes

A aplicação foca em conceitos fundamentais de interatividade no front-end:

*   **Carrossel de Imagens Sincronizado:** Alteração do plano de fundo em tela cheia (`100vh`) com base na seleção do usuário.
*   **Troca de Contexto Informativo:** Atualização simultânea do título e da descrição do dragão ativo na tela ao alternar os controles.
*   **Controles de Navegação Estilizados:** Paginação em botões circulares customizados que indicam visualmente o estado selecionado do sistema.
*   **Animação de Transição:** Efeito suave de opacidade (`@keyframes`) aplicado à entrada de cada nova imagem de fundo no DOM.

---

## 💻 Recursos de Código

A estrutura do projeto adota práticas clássicas de desenvolvimento web estruturado:

*   **Manipulação Manual do DOM:** Uso do método `querySelectorAll` para capturar os elementos e aplicação de estruturas de repetição `forEach` para escuta ativa de eventos de clique.
*   **Programação Funcional e Limpa:** Divisão das tarefas do carrossel em pequenas funções JavaScript puras e reaproveitáveis (`esconderImagemAtiva`, `mostrarInformacoes`, etc.), facilitando a leitura e a manutenção da lógica.
*   **Camadas Visuais com Pseudo-elementos:** Aplicação de uma máscara de gradiente linear escura usando o pseudo-elemento `:after` diretamente no escopo do layout para garantir o contraste e a leitura legível dos textos brancos sobre as imagens.
*   **Tipografia Customizada:** Incorporação nativa de fontes externas via diretiva CSS `@font-face` para renderização da tipografia estilizada da série (*GOT.ttf*).

---

## 🛠️ Stacks Utilizadas

*   **HTML5:** Estrutura declarativa de tags para listagem de mídias e botões.
*   **CSS3 Tradicional:** Estilização estruturada com uso de posicionamentos fixos, gerenciamento de profundidade de tela (`z-index`) e regras flexíveis de alinhamento com Flexbox.
*   **JavaScript (Vanilla JS):** Desenvolvimento manual da lógica lógica de interatividade e manipulação de classes no DOM.

---

## 🎯 Contexto e Propósito Histórico

Este repositório cumpre um papel estritamente histórico no portfólio. Desenvolvido durante um evento imersivo voltado a iniciantes e antes do início de estudos formais e aprofundados em engenharia de software, o projeto serviu como um exercício inicial de introdução à sintaxe da web. 

A arquitetura de arquivos reflete a estrutura clássica e guiada proposta pelo treinamento prático daquela semana (`reset.css`, `estilo.css`, `responsivo.css` e `index.js`). Por se tratar de um projeto de treino inicial com escopo delimitado aos fundamentos básicos, o código permanece muito similar ao seu estado original, servindo como um registro do processo de aprendizado prático com lógica procedural e manipulação do DOM.