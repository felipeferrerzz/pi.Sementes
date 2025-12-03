const form = document.getElementById("form-contato");


const botoesComprar = document.querySelectorAll(".btn");


const btnEnviar = document.getElementById("btn-enviar");

botoesComprar.forEach(botao => {
    botao.addEventListener("click", () => {
        form.classList.add("mostrar");
        form.scrollIntoView({ behavior: "smooth" });
    });
});


btnEnviar.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
    }
});
