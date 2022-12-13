//Selecionando e alterando conteúdo da tag
let nome = document.querySelector(".nomeDoTitulo").innerHTML = ""

function mudarParaAmarelo() {
    document.querySelector(".painel-de-cores").classList.remove("vermelho");
    document.querySelector(".painel-de-cores").classList.remove("azul");
    document.querySelector(".painel-de-cores").classList.add("amarelo");
    //document.querySelector(".painel-nome-da-cor").innerHTML="Amarelo";
    
}
function mudarParaVermelho(){
    document.querySelector(".painel-de-cores").classList.remove("amarelo");
    document.querySelector(".painel-de-cores").classList.remove("azul");
    document.querySelector(".painel-de-cores").classList.add("vermelho");

}
function mudarParaAzul(){
    document.querySelector(".painel-de-cores").classList.remove("amarelo");
    document.querySelector(".painel-de-cores").classList.remove("vermelho");
    document.querySelector(".painel-de-cores").classList.add("azul");
}


