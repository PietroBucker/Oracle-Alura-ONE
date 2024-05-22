/* eslint-disable import/extensions */
import renderCards from './GET.js';
import validaForm from './POST.js';
import removeCard from './DEL.js';
import favoritar from './favoritar.js';

window.onload = async () => {
	await renderCards();
	await removeCard();
	validaForm();
	favoritar();
};
