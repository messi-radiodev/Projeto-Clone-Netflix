document.getElementById('buscarcep').addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('debug').innerText = JSON.stringify(data);
})
})