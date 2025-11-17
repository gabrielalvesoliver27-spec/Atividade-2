// --- 1. LÓGICA DO MENU HAMBÚRGUER  ---
const botaoAbrir = document.getElementById('btn-hamburger');
const botaoFechar = document.getElementById('btn-fechar');
const menu = document.getElementById('nav-menu');

botaoAbrir.addEventListener('click', () => {
    menu.classList.add('aberto');
});

botaoFechar.addEventListener('click', () => {
    menu.classList.remove('aberto');
});


// --- 2. LÓGICA DO DROPDOWN  ---
// Seleciona todas as setas de dropdown 
const setasDropdown = document.querySelectorAll('.seta-dropdown');

setasDropdown.forEach(seta => {
    seta.addEventListener('click', (e) => {
        // Pega o <li> pai da seta
        const itemPai = e.target.parentElement;
        // Adiciona/remove a classe que o CSS usa para mostrar o submenu
        itemPai.classList.toggle('submenu-aberto');
    });
});


// --- 3. LÓGICA DO MODAL  ---

// Seleciona todos os botões que abrem um modal
const botoesAbrirModal = document.querySelectorAll('[data-modal-alvo]');

botoesAbrirModal.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pega o ID do modal alvo (ex: "#modal-doacao")
        const alvo = botao.dataset.modalAlvo; 
        const modal = document.querySelector(alvo);
        if (modal) {
            modal.classList.add('aberto');
        }
    });
});

// Seleciona todos os elementos que fecham modais
const elementosFecharModal = document.querySelectorAll('.modal-fechar, .modal-overlay');

elementosFecharModal.forEach(elemento => {
    elemento.addEventListener('click', (e) => {
        // Pega o modal pai do elemento clicado
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.remove('aberto');
        }
    });
});