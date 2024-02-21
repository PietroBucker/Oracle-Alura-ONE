function descriptografarTexto(texto) {
    let novoTexto = '';
    novoTexto = texto.replace(/AI/g, 'A');
    novoTexto = novoTexto.replace(/ENTER/g, 'E');
    novoTexto = novoTexto.replace(/IMES/g, 'I');
    novoTexto = novoTexto.replace(/OBER/g, 'O');
    novoTexto = novoTexto.replace(/UFAT/g, 'U');
    return novoTexto;
}

export default descriptografarTexto;