const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
const btnSubmitName = document.getElementById('btn-submit-name');
const inputName = document.getElementById('user-name');
const dynamicResponseDiv = document.getElementById('dynamic-response');
const welcomeMessage = document.getElementById('welcome-message');
const btnReady = document.getElementById('btn-ready');
const contentSection = document.getElementById('content-section');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');


btnSubmitName.addEventListener('click'), () => {

    const userName = inputName.value.trim();}

    if (userName !== "") {
        
    }
    
        welcomeMessage.innerHTML = `Olá <strong>${userName}</strong>, seja bem vindo, vamos descobrir informações sobre dispositivos tecnológicos no agro.; 
        
        dynamicResponseDiv.classList.remove('hidden-element');
    } else {
        alert("Digite o nome antes de enviar.");
    }
});

btnReady.addEventListener('click', () => {

    contentSection.classList.remove('hidden-element');
});