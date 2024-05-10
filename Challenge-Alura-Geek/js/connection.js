async function requisicaoGet() {
	const response = await fetch('http://localhost:3000/produtos');
	const data = await response.json();
	console.log(data);
	return data;
}

requisiGet();

export {
	requisicaoGet,
};
