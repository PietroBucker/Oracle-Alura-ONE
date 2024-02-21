const texto = document.getElementById('area-texto');
const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const textoVazio = document.getElementById('resultado')
const spanAviso = document.getElementById('aviso');



criptografar.addEventListener('click', () => {
    const result = criptografarTexto(texto.value);
    textoVazio.innerHTML = `<p>${result}</p>`;
});

texto.addEventListener('keyup', () => {
    const regex = /[a-zá-úÁ-Ú]+/g;
    if (regex.test(texto.value)) {
        spanAviso.style.color = 'red';
        spanAviso.style.fontSize = 'large';
    }
    else {
        spanAviso.style.color = 'black';
        spanAviso.style.fontSize = 'medium';
    }
});