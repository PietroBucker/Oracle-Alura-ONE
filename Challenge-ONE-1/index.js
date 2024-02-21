import criptografarTexto from './helper/criptografar.js';
import descriptografarTexto from './helper/descriptografar.js';

const texto = document.getElementById('area-texto');
const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const textoVazio = document.getElementById('resultado');
const spanAviso = document.getElementById('aviso');
const copiar = document.getElementById('copiar');

texto.addEventListener('keyup', () => {
    const regex = /[A-Zá-úÁ-Ú]+/g;
    if (regex.test(texto.value)) {
        spanAviso.style.color = 'red';
        spanAviso.style.fontSize = 'large';
        criptografar.disabled = true;
        descriptografar.disabled = true;
    }
    else {
        spanAviso.style.color = 'black';
        spanAviso.style.fontSize = 'medium';
        criptografar.disabled = false;
        descriptografar.disabled = false;
    }
});

criptografar.addEventListener('click', () => {
    const result = criptografarTexto(texto.value);
    textoVazio.innerHTML = `<p style="position: relative">${result}</p>`;
    document.getElementById('decoracao').style.display = 'none';
});

descriptografar.addEventListener('click', () => {
    const result = descriptografarTexto(texto.value);
    textoVazio.innerHTML = `<p style="position: relative">${result}</p>`;
    document.getElementById('decoracao').style.display = 'none';
});

copiar.addEventListener('click', () => {
    const result = textoVazio.innerText;
    navigator.clipboard.writeText(result);
    document.getElementById('alertaCopia').style.display = 'block';
});