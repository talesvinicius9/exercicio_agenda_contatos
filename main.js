const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    });

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('num-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(parseFloat(inputNumContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha
    }

    inputNomeContato.value = '';
    inputNumContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}