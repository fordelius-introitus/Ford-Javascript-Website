
//class contato
let botaoEnviar = document.querySelector(".enviar");

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {
    event.preventDefault(); // Evita o reload da página

    let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value
        );

    console.log(data);    
    Enviar(data.nome);
}

function Enviar(nome) {
    if (nome != "") {
        alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    }
}