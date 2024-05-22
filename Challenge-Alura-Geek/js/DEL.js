/* eslint-disable import/extensions */
import { requisicaoDelete } from './connection.js';

async function removeCard() {
	const btnRemover = document.querySelectorAll('.btn_remover');
	btnRemover.forEach((btn) => {
		btn.onclick = () => {
			requisicaoDelete(btn.id)
			window.location.reload();
		};
	});
}
export default removeCard;
