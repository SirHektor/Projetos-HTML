const funcionariosAutorizados = [1000, 1999];
let button = document.getElementById('verificarBtn');
button.addEventListener('click', function() {

verificarBtn.addEventListener("click", () => {
    const numeroCartaoInput = document.getElementById("numeroCartao");
    const numeroCartao = parseInt(numeroCartaoInput.value);

    if (funcionariosAutorizados.includes(numeroCartao)) {
        resultado.textContent = "Acesso permitido! Bem-vindo.";
    } else {
        resultado.textContent = "Acesso negado. Você não possui permissão para acessar esta área.";
    }
}
));