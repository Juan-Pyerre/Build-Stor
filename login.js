//essa é a função que faz as coisas
function fazerLogin() {
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    //esse if ve se é ou não é
    if (email.trim() === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite qualquer email para continuar.";
        return;
    }
    //essa é mensagem que aparece
    mensagem.style.color = "green";
    mensagem.textContent = "Você está logado!";
}