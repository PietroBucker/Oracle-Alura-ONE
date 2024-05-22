// GET
async function requisicaoGet() {
	try {
		const response = await fetch('http://localhost:3000/produtos');
		if (!response.ok) {
			const error = new Error('Erro ao buscar os produtos');
			error.status = response.status;
			throw error;
		}
		const data = await response.json();
		return {
			data,
			response: { status: '200', message: 'ok' },
		};
	} catch (error) {
		console.log('aqui', error.message, error.status);
	}
}
// POST
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
// DELETE
async function requisicaoDelete(id) {
	console.log(id);
	const response = await fetch(`http://localhost:3000/produtos/${id}`, {
		method: 'DELETE',
	});
	console.log(response);
	return 'ok';
}

export {
	requisicaoGet,
	requisicaoPost,
	requisicaoDelete,
};
