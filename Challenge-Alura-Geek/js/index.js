// eslint-disable-next-line import/extensions
import { requisicaoGet, requisicaoPost } from './connection.js';

const cardsContent = document.querySelector('.cards_content');
const btnAdicionar = document.querySelector('.btn_adicionar');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#form_product');

const renderCards = async () => {
	const data = await requisicaoGet();
	cardsContent.innerHTML = '';
	data.forEach((item) => {
		cardsContent.innerHTML += `
			<div class="card">
				<img src="${item.imagem}" alt="Imagem do produto">
				<p>${item.nome}</p>
				<p><strong>R$ ${item.preco}</strong></p>
				<div class="btns_card">
					<button class="btn_favoritar">🌟</button>
					<button class="btn_remover">✖️</button>
				</div>
			</div>
        `;
	});
};
function validaForm() {
	const charValidate = 5;
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
	console.log('teste');
	const nome = document.querySelector('input[name="nome"]').value;
	const preco = document.querySelector('input[name="preco"]').value;
	const imagem = document.querySelector('input[name="imagem"]').value;
	console.log(nome, preco, imagem);
	if (nome && preco && imagem) {
		await requisicaoPost({ nome, preco, imagem });
		await renderCards();
	} else {

	}
});

window.onload = async () => {
	await renderCards();
	validaForm();
	// btnAdicionar.disabled = Array.from(inputs).every((input) => input.value.length < 5 || input.value === '');

};
