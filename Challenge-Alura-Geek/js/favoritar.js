function favorited(btn, isFavorited) {
	if (isFavorited) {
		btn.classList.add('favoritar');
	} else {
		btn.classList.remove('favoritar');
	}
}

const favoritar = () => {
	const btnFavoritar = document.querySelectorAll('.btn_favoritar');
	btnFavoritar.forEach((btn) => {
		const isFavorited = localStorage.getItem(btn.id) === 'true';
		favorited(btn, isFavorited);
		btn.addEventListener('click', () => {
			const isFavoritedCard = localStorage.getItem(btn.id) === 'true';
			localStorage.setItem(btn.id, !isFavoritedCard);
			favorited(btn, !isFavoritedCard);
		});
	});
};

export default favoritar;
