document.getElementById("cadastroForm")
.addEventListener("submit", async function(event){

    event.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        rg: document.getElementById("rg").value,
        cpf: document.getElementById("cpf").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    console.log(dados);

    // Exemplo de envio para backend
    /*
    const resposta = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    alert(resultado.mensagem);
    */

    alert("Cadastro realizado com sucesso!");
});