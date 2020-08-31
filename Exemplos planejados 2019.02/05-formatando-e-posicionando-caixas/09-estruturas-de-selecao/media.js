function avaliarAluno() {
    var inputNota1 = document.all['nota1'];
    var inputNota2 = document.all['nota2'];
    var pResposta = document.all['resposta'];

    var nota1 = Number(inputNota1.value);
    var nota2 = Number(inputNota2.value);
    var media = (nota1 + nota2) / 2;

    pResposta.innerHTML = 'Média final: ' + media.toFixed(1);
    if (media >= 6) {
        pResposta.style.color = 'green';
        pResposta.style.borderStyle = 'solid';
        pResposta.innerHTML += '<br><strong>Aluno aprovado!</strong>';
    } else if (media >= 4) {
        pResposta.style.color = 'orange';
        pResposta.innerHTML += '<br><strong>Aluno de exame!</strong>';
    } else {
        pResposta.style.color = 'red';
        pResposta.innerHTML += '<br><strong>Aluno reprovado!</strong>';
    }
}