function processarEscolha() {
   
    const select = document.getElementById('category');
    const display = document.getElementById('resultado');
    const valor = select.value; 

   
    if (valor === "") {
        display.innerText = "Erro: Por favor, selecione uma categoria válida!";
        display.style.color = "red";
        alert("Nenhuma opção selecionada!"); 
        return;
    }

    let mensagem = "";
    
    switch (valor) {
        case "eletronicos":
            mensagem = " Smartphones, notebooks e opções variadas.";
            break;
        case "roupas":
            mensagem = "Moda masculina, feminina e acessórios.";
            break;
        case "alimentos":
            mensagem = " Itens frescos perfeitos para sua casa.";
            break;
        default:
            mensagem = "Opção inválida.";
    }

    display.innerText = mensagem;
    display.style.color = "#2c3e50";
}