/* eslint-disable import/extensions */
import { requisicaoDelete } from './connection.js';

async function removeCard() {
	const btnRemover = document.querySelectorAll('.btn_remover');
	btnRemover.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			requisicaoDelete(btn.id)
			// window.location.reload();
		});
	});
}
export default removeCard;
