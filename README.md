# ONG Corrente do Bem - Atividade 2

Este projeto é um site estático e responsivo de 3 páginas para a "ONG Corrente do Bem". O foco desta atividade foi construir uma base de front-end robusta do zero, sem o uso de frameworks como Bootstrap ou React.

O projeto demonstra a criação de um **Design System** completo, um **Grid System responsivo** de 12 colunas e **componentes interativos** (Menu, Dropdown, Modal) com JavaScript puro.

## 🚀 Link de Visualização (Deploy)

O site foi publicado usando o GitHub Pages e pode ser acessado no link abaixo:

**https://gabrielalvesoliver27-spec.github.io/Atividade-4/**

---

## 📖 Páginas do Projeto

O site é composto por 3 páginas HTML, todas utilizando o mesmo `styles.css` e `launch.js`:

1.  **`index.html` (Página Inicial)**
    * Apresenta a ONG, um banner, um alerta de campanha e uma chamada para doação que ativa um Modal.

2.  **`projetos.html` (Página de Projetos)**
    * Detalha as iniciativas da ONG usando o Grid System (`.col-lg-4`) para criar 3 colunas.
    * Utiliza componentes de "Badge" (etiqueta) para categorizar os projetos.

3.  **`cadastro.html` (Página de Cadastro)**
    * Um formulário completo que utiliza o Grid System (`.col-lg-7` e `.col-lg-5`) para um layout de 2 colunas em desktops.

---

## 🛠️ Destaques Técnicos

### 1. Design System (`styles.css`)
Um sistema de design completo foi estabelecido usando **Variáveis CSS (`:root`)** para garantir consistência global. Ele inclui:
* **Paleta de Cores** (primária, secundária, fundo, texto, etc.)
* **Tipografia** (5 tamanhos de fonte)
* **Sistema de Espaçamento** (baseado em módulo 8px, de `--espaco-pp` a `--espaco-xg`)

### 2. Grid System Responsivo (`styles.css`)
Foi construído um **sistema de grid de 12 colunas** "mobile-first" usando Flexbox.
* **Estrutura:** `.container`, `.row` e classes de coluna (ex: `.col-12`, `.col-md-6`, `.col-lg-4`).
* **5 Breakpoints:** O grid se adapta em 5 tamanhos de tela (sm, md, lg, xl, xxl), permitindo layouts complexos e totalmente responsivos.

### 3. Componentes JavaScript (`launch.js`)
Três componentes de UI interativos foram criados do zero:
* **Menu Responsivo:** Um menu hambúrguer para mobile (`#btn-hamburger`) que se transforma em um menu de navegação horizontal em desktops.
* **Dropdown (Submenu):** O item "Projetos" no menu possui um submenu funcional, que no mobile é ativado por clique (`.seta-dropdown`) e no desktop por `hover`.
* **Modal (Popup):** Um modal reutilizável (`.modal`) que é ativado por botões com o atributo `data-modal-alvo` (ex: "Faça sua Doação").

### 4. CSS Avançado
* **Validação Visual de Formulário:** Os campos do `cadastro.html` usam as pseudo-classes `:valid` e `:invalid` para dar feedback visual instantâneo ao usuário.
* **Estados de Componentes:** Botões (`.botao`) e links possuem estados de `:hover`, `:focus` e `:active` para melhor usabilidade e acessibilidade.

## 💻 Como Visualizar Localmente
Não é necessário nenhum servidor ou instalação.

1.  Clone este repositório para sua máquina.
2.  Abra o arquivo `index.html` diretamente no seu navegador.
