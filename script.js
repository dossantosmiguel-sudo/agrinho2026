const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
function boasVindas() {
    const nome = document.getElementById('userName').value;
    if (nome.trim() !== "") {
        document.getElementById('greetingMessage').innerText = `Olá, ${nome}! Tudo bem? Seja muito bem vindo ao site do Miguel`;
    } else