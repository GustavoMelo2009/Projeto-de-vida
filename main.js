const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove classe ativa de todos os botões e abas
        botoes.forEach(b => b.classList.remove("ativo"));
        abas.forEach(a => a.classList.remove("ativo"));
        
        // Adiciona classe ativa ao botão clicado e sua aba correspondente
        botao.classList.add("ativo");
        abas[indice].classList.add("ativo");
    });
});