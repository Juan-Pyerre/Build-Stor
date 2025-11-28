function fazerLogin() {
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    if (email.trim() === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite qualquer email para continuar.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Você está logado!";
}
