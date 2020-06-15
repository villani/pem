// DECLARAR AS FUNÇÕES
function trocarImagem() {
    var imgLogo = document.all['logo'];

    if (imgLogo.alt == 'Fatec') {
        imgLogo.src = "https://www.fatecpg.edu.br/img/logoGoverno.png";
        imgLogo.alt = "Governo";
    } else {
        imgLogo.src = "imagens/logoFatec.png";
        imgLogo.alt = "Fatec";
    }

}

// ASSOCIAR AOS ELEMENTOS HTML
var buttonTrocar = document.all['trocar'];
buttonTrocar.addEventListener('click', trocarImagem);