
// Seleciona o botão de enviar o nome
const btnSubmitName = document.getElementById('btn-submit-name');
// Seleciona o campo de input onde o usuário digita o nome
const inputName = document.getElementById('user-name');
// Seleciona a div que vai mostrar a resposta dinâmica
const dynamicResponseDiv = document.getElementById('dynamic-response');
// Seleciona o elemento de texto da mensagem
const welcomeMessage = document.getElementById('welcome-message');
// Seleciona o botão "Pronto"
const btnReady = document.getElementById('btn-ready');
// Seleciona a seção principal de conteúdo da página
const contentSection = document.getElementById('content-section');
// Seleciona o botão que alterna o tema
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

// Função para processar o nome e exibir a saudação inicial
btnSubmitName.addEventListener('click', () => {
    // Armazena o nome digitado em uma variável tirando espaços extras
    const userName = inputName.value.trim();

    // Valida se o campo não está vazio
    if (userName !== "") {
        // Altera o texto da mensagem de forma funcional e personalizada
        welcomeMessage.innerHTML = `Olá <strong>${userName}</strong>, seja bem vindo, vamos aprender coisas novas.`;
        
        // Remove a classe para mostrar a mensagem e o próximo botão
        dynamicResponseDiv.classList.remove('hidden-element');
    } else {
        alert("Por favor, digite o seu nome antes de enviar.");
    }
});

// Função para revelar o conteúdo principal do site
btnReady.addEventListener('click', () => {
    // Remove a classe que esconde a seção sobre tecnologia no agro
    contentSection.classList.remove('hidden-element');
});