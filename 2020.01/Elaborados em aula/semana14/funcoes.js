// DEFINIR AS FUNÇÕES JAVASCRIPT
function ehPar(inteiro) {

    // - Definindo a variável que armazenará o texto de saída.
    var resposta = "";

    // - Verificando se o resto da divisão do inteiro por 2 é igual a zero.
    if (inteiro % 2 == 0) { // Se 'sim' é par.
        resposta = inteiro + " é par.";

    } else { // Se 'não' é impar.
        resposta = inteiro + " é impar.";
    }

    // Retorna o texto da variável resposta.
    return resposta;
}

function verificarMulta(permitida, condutor) {
    var porcentagem = condutor / permitida;
    var resposta = "";
    if (porcentagem <= 1) {
        resposta = "Sem multa";
    } else if (porcentagem <= 1.2) {
        resposta = "Multa leve";
    } else {
        resposta = "<strong>Multa grave</strong>";
    }
    return resposta;
}

// ATRIBUINDO AS FUNÇÕES AOS ELEMENTOS HTML
// - Obtendo um elemento do documento HTML.
var buttonProcessar = document.all['processar'];

// - Adicionando ao evento 'click' do botão a função 'ehPar'. 
buttonProcessar.addEventListener('click', function () {
    var acao = buttonProcessar.innerText;
    var pResposta = document.all['resposta'];
    switch (acao) {
        case "É par?":
            var inputInteiro = document.all['inteiro'];
            var inteiro = Number(inputInteiro.value);
            pResposta.innerHTML = ehPar(inteiro);
            break;
        case "Verificar Multa":
            var permitida = Number(document.all['permitida'].value);
            var condutor = Number(document.all['condutor'].value);
            pResposta.innerHTML = verificarMulta(permitida, condutor);
            break;
        default:
            alert('A ação do botão ainda não foi definida!');
    }
});