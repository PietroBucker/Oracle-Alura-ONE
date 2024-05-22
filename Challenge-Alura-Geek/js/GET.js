/* eslint-disable import/extensions */
import { requisicaoGet } from './connection.js';

const semFoto = '/assets/semFoto.png';

function isValidImageUrl(url) {
	// Expressão regular para validar o formato do URL da imagem
	const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
	return imageUrlRegex.test(url);
}

const renderCards = async () => {
	const cardsContent = document.querySelector('.cards_content');
	const { data } = await requisicaoGet();
	cardsContent.innerHTML = '';
	if (data.length === 0) {
		cardsContent
			.innerHTML = '<h1 style="text-align:center">Nenhum produto cadastrado</h1>';
	} else {
		data.forEach((item) => {
			if (!isValidImageUrl(item.imagem)) {
				item.imagem = semFoto;
			}
			cardsContent.innerHTML += `
			<div class="card">
				<img 
					src="${item.imagem}" 
					alt="Imagem do produto" 
					>
				<p>${item.nome}</p>
				<p><strong>R$ ${item.preco}</strong></p>
					<div class="btns_card">
						<button id="favorito_${item.id}" class="btn_favoritar">🌟</button>
						<button type="submit" id="${item.id}" class="btn_remover">✖️</button>
					</div>
				</div>
				`;
		});
	}
};

export default renderCards;
