function descriptografarTexto(texto) {
    let novoTexto = '';
    for (let letra of texto) {
        if (letra === 'AI') {
            novoTexto += "A";
        }
        else if (letra === 'ENTER') {
            novoTexto += "E";
        }
        else if (letra === 'IMES') {
            novoTexto += "I";
        }
        else if (letra === 'OBER') {
            novoTexto += "O";
        }
        else if (letra === 'UFAT') {
            novoTexto += "U";
        }
        else {
            novoTexto += letra;
        }
    };
    return novoTexto;
}

export default descriptografarTexto;