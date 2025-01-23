document.addEventListener('click', (e) => {
    const listaClasse = e.target.classList;
    if (e.target && listaClasse.contains('btn-acessar')) {
        const url = e.target.getAttribute('data-url');
        window.open(url, '_blank');
    }

if (e.target && listaClasse.contains('btn-excluir')) {
    const response = confirm('Deseja realmente excluir esse filme?');
    if (!response) {
        return;
    }
    const id = e.target.getAttribute('data-id');
    document.querySelector(`[data-id="${id}"]`).remove();
}    
});

var dados = {
    nome: "",
    url: "",
    categoria: "",
    ano: 0  
}
const attdados = () => {
    dados = {
    nome: document.getElementById('titulo').value,
    url: document.getElementById('url').value,
    categoria: document.getElementById('categoria').value,
    ano: document.getElementById('ano').value
    }

console.log("Dados iniciais", dados);

document.getElementById('debug').innerHTML = JSON.stringify(dados, null, 4);

};	

const montaitem = () => {
    const id = new Date().getTime(); // ms do horário atual gerando um id unico
    const item = `
            <tr data-id="${id}">
            <td>${dados.nome}</td>
            <td>${dados.categoria}</td>
            <td>${dados.ano}</td>
            <td class="text-end">
                <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-acessar" data-url="${dados.url}">Acessar</a>
                <a href="javascript:void(0)" class="btn btn-danger btn-sm btn-excluir" data-id="${id}">Excluir</a>
            </td>
        </tr>`;

            return item;
        }
const cadastrafilme = () => {

    if (!dados.nome || !dados.url || !dados.categoria || !dados.ano) {
        alert('Preencha todos os campos!');
        return;
    } else {
        alert('Filme cadastrado com sucesso!');}

    document.getElementById('listafilmes')
    .insertAdjacentHTML('beforeend', montaitem());
    dados = {};
}