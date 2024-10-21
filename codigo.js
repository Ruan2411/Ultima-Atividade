let cadastros = [];

document.getElementById('cadastrar-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        const cadastro = {
            nome,
            email
        };

        cadastros.push(cadastro);

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';

        exibirCadastros();
    }
});

function exibirCadastros() {
    const tbody = document.getElementById('cadastros-tbody');
    tbody.innerHTML = '';

    cadastros.forEach((cadastro, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cadastro.nome}</td>
            <td>${cadastro.email}</td>
        `;
        tbody.appendChild(row);
    });
}