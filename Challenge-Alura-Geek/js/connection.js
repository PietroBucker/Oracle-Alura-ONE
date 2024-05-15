async function requisicaoGet() {
	const response = await fetch('http://localhost:3000/produtos');
	const data = await response.json();
	return data;
}

async function requisicaoPost(produto) {
	await fetch('http://localhost:3000/produtos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(produto),
	});
	return 'ok';
}

// async function requisicaoDelete(id) {

// }

export {
	requisicaoGet,
	requisicaoPost,
};
