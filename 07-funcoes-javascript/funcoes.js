function mostrarOla() {
	var inputNome = document.all['nome'];
	var nome = inputNome.value;
	var pResposta = document.all['resposta'];
	pResposta.textContent += 'Olá ' + nome;
}

function realizarCalculos() {
	var real = Number(document.all['real'].value);
	document.all['baixo'].textContent += Math.floor(real);
	document.all['cima'].textContent += Math.ceil(real);
	document.all['padrao'].textContent += Math.round(real);
	document.all['raiz'].textContent += Math.sqrt(real);
	document.all['potencia'].textContent += 
				Math.pow(real, 2);
}