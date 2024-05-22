/* eslint-disable import/extensions */
import { requisicaoPost } from './connection.js';

const btnAdicionar = document.querySelector('.btn_adicionar');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#form_product');

function validaForm() {
	const charValidate = 3;
	inputs.forEach((input) => {
		input.addEventListener('input', () => {
			const next = input.nextElementSibling;
			if (input.value.length < charValidate) {
				next.style.display = 'block';
			} else {
				next.style.display = 'none';
			}
		});
	});

	form.addEventListener('input', () => {
		btnAdicionar.disabled = Array.from(inputs)
			.some((input) => input.value.length < charValidate);
	});
}

btnAdicionar.addEventListener('click', async (event) => {
	event.preventDefault();
	const nome = document.querySelector('input[name="nome"]').value;
	const preco = Number(document.querySelector('input[name="preco"]').value).toFixed(2);
	const imagem = document.querySelector('input[name="imagem"]').value;

	await requisicaoPost({ nome, preco, imagem });
	// await renderCards();
});

export default validaForm;
