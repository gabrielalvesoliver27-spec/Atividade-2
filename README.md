ATIVIDADE 2

Projeto Website - ONG Corrente do Bem
Este repositório contém o código-fonte de um site estático e totalmente responsivo para uma organização fictícia, a "ONG Corrente do Bem".

O projeto foi desenvolvido do zero, sem o uso de frameworks como Bootstrap ou Tailwind. O objetivo principal foi construir um Design System e um Grid System próprios, demonstrando um profundo conhecimento de HTML5 semântico, CSS3 moderno (Flexbox, Variáveis) e JavaScript puro para interatividade.

📖 Páginas e Funcionalidades
O site é composto por 3 páginas principais, todas conectadas pelo mesmo sistema de design e componentes.

index.html (Página Inicial)

Apresenta a missão da ONG e um banner principal.

Inclui um componente de "Alerta" para campanhas (Campanha de Inverno).

Possui uma chamada para ação (CTA) que ativa um Modal de Doação.

Projetos.html (Página de Projetos)

Detalha as três principais iniciativas da ONG: Educação, Cozinha Comunitária e Capacitação.

Utiliza "Badges" (etiquetas) para categorizar os projetos.

Usa links âncora (#educacao, #cozinha) para navegação interna, que são linkados pelo menu dropdown.

cadastro.html (Página de Cadastro)

Um formulário completo para cadastro de doações e voluntários.

O formulário está dividido em "Dados Pessoais" e "Endereço", usando o grid para um layout de 2 colunas em telas maiores.

O formulário está configurado para enviar os dados via POST para um endpoint submit_form.php (backend não incluído).

🛠️ Destaques Técnicos
O diferencial deste projeto não é apenas o site, mas a arquitetura front-end construída para ele.

1. Design System (em styles.css)
Um completo Design System foi definido usando variáveis CSS (:root) para garantir consistência global. Ele inclui:

Paleta de Cores: Variáveis como --cor-primaria, --cor-secundaria, --cor-fundo, etc.

Tipografia: Tamanhos padronizados para h1, h2, h3 e texto base.

Sistema de Espaçamento: Um módulo baseado em 8px (de --espaco-pp a --espaco-xg) usado para padding, margin e gap.

2. Grid System Responsivo (em styles.css)
Um sistema de grid de 12 colunas, "mobile-first" e baseado em Flexbox foi criado do zero.

Estrutura: Utiliza .container, .row e classes de coluna (ex: .col-12, .col-md-6, .col-lg-4).

5 Breakpoints: O grid se adapta em 5 pontos de quebra (sm, md, lg, xl, xxl), permitindo layouts complexos e totalmente responsivos.

3. Componentes Reutilizáveis
O projeto é construído com componentes de CSS e JavaScript puros:

Menu Responsivo (launch.js + styles.css): Um menu hambúrguer para dispositivos móveis que se transforma em um menu de desktop em telas maiores.

Dropdown (Submenu) (launch.js + styles.css): O menu "Projetos" tem um submenu. No mobile, ele abre com um clique na seta (.seta-dropdown); no desktop, ele aparece com hover.

Modal (Popup) (launch.js + styles.css): Um modal reutilizável para a chamada de doação. Ele é ativado por botões com o atributo data-modal-alvo e pode ser fechado clicando no 'X' ou no overlay.

Cards (.caixa-destaque): O principal componente de "bloco" usado para agrupar todo o conteúdo.

Validação de Formulário (CSS): Os campos do formulário em cadastro.html usam pseudo-classes :valid e :invalid para feedback visual instantâneo.
