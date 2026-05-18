const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));
        textos.forEach(t => t.classList.remove('ativo'));
        btn.classList.add('ativo');
        textos[idx].classList.add('ativo');
    });
});

const contadores = document.querySelectorAll(".contador");

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    let diff = tempoObjetivo - tempoAtual;
    if (diff <= 0) return null;
    let segundos = Math.floor(diff / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

function updateContadores() {
    contadores.forEach(c => {
        const target = c.getAttribute('data-target');
        if (!target) {
            c.textContent = 'Data não definida';
            return;
        }
        const tempoObjetivo = new Date(target);
        const texto = calculaTempo(tempoObjetivo);
        c.textContent = texto ? texto : 'Objetivo cumprido';
    });
}

updateContadores();
setInterval(updateContadores, 1000);

