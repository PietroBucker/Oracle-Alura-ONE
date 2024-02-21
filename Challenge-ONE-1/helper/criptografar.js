function criptografarTexto(texto) {
    let novoTexto = '';
    for (let letra of texto) {
        if (letra === 'A') {
            novoTexto += "AI";
        }
        else if (letra === 'E') {
            novoTexto += "ENTER";
        }
        else if (letra === 'I') {
            novoTexto += "IMES";
        }
        else if (letra === 'O') {
            novoTexto += "OBER";
        }
        else if (letra === 'U') {
            novoTexto += "UFAT";
        }
        else {
            novoTexto += letra;
        }
    };
    return novoTexto;
}

export default criptografarTexto;