const btnBoasVindas = document.getElementById("btnBoasVindas");
const mensagem = document.getElementById("mensagem");

btnBoasVindas.addEventListener("click", function () {
    mensagem.innerText = "Olá! Que bom ter você aqui. Seja bem-vindo(a) ao meu portfólio!";

    btnBoasVindas.innerText = "Mensagem exibida!";
});

const formContato = document.getElementById("formContato");
const campoNome = document.getElementById("nome");
const saudacao = document.getElementById("saudacao");

formContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeDigitado = campoNome.value.trim();

    if (nomeDigitado === "") {
        saudacao.innerText = "Por favor, digite seu nome.";
        return;
    }

    saudacao.innerText = "Olá, " + nomeDigitado + "! Obrigada por visitar meu portfólio.";

    campoNome.value = "";
});