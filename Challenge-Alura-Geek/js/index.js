/* eslint-disable import/extensions */
import renderCards from './GET.js';
import validaForm from './POST.js';

window.onload = async () => {
	await renderCards();
	validaForm();
};
