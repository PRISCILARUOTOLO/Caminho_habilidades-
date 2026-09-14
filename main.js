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
    `<h2> Olá ${name}! </h2>
    <p> Seu desafio é:  </p>
    <h3> ${desafio}</h3>
    
    <label for ="resposta">
    Qual o projeto para este desafio? 
    </label> 
    
    <br><br>

    <textarea
    id ="resposta"
    rows = "5"
    cols = "40"
    placeholder = "Digite aqui o seu projeto:" >
    </textarea>

    <br><br>

    <button onclick="avaliarResposta()"> Enviar projeto! </button>
    `;

}

function avaliarResposta(){
    const nome = document.getElementById("nome").value;
    const resposta = document.getElementById("resposta").value;
    const textoDesafio = document.querySelector("#resultado h3");

    if(resposta.trim() === ""){
        alert("Digite o seu projeto para começar!");
        return;

    }

    let pontos = 0;

//Critéio de avaliação - quantidade de letras.
    if(resposta.length >= 30){
        pontos += 30;
    }

// Critério de avaliação - palavras presentes no texto.
const texto = resposta.toLowerCase();

if(
    texto.includes("desenvolver")||
    texto.includes("criar")||
    texto.includes("praticar")
){
    pontos += 35;
}

if(
    texto.includes("pesquisar")||
    texto.includes("analisar")||
    texto.includes("resolver")
){
    pontos += 35;
}

let nível;

if(pontos >= 70){
    nível= "Inventor de Idéias";
}

else if (pontos >= 65){
    nível = "Desenvolvedor";
}

else{
    nível = "Explorador";
}







}
