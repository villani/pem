function mudarCor() {
    var selectCor = document.all['cor'];
    var cor = selectCor.value;

    switch (cor) {
        case 'verde':
            document.body.style.backgroundColor = 'green';
            break;
        case 'marrom':
            document.body.style.backgroundColor = 'brown';
            break;
        default:
            document.body.style.backgroundColor = 'purple';
    }
}