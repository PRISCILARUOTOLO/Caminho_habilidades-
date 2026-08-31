const desafios =[
    "Resolver problemas de lógica",
    "Apreder novas funções",
    "Criar novas soluções",
    "Aprender Padrões",
    "Criar uma invenção"
];

function iniciarDesafio() {
    const name=document.getElementById("name").value;

     if(name === ""){
        alert("Digite o seu nome para começar!");
        return;

    }

    const numero = Math.floor(Math.random()*desafios.length)
    const desafio = desafios[numero];

    document.getElementById("resultado").innerHTML =
    "<h2>Olá ${name}! </h2>"
    "<p> Seu desafio é: ${desafio} </p>"

}
