const avanca = document.querySelectorAll('.proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
const guia = document.getElementById("guia");
const btnGuia = document.getElementById("btnGuia");

let guiaAtiva = false;

btnGuia.onclick = () => {
    guiaAtiva = !guiaAtiva;

    guia.style.display = guiaAtiva ? "block" : "none";

    btnGuia.textContent = guiaAtiva
        ? "Desativar Guia"
        : "Guia de Leitura";
};

document.addEventListener("mousemove",(e)=>{
    if(guiaAtiva){
        guia.style.top = (e.clientY-20)+"px";
    }
});