const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;

    /* Verificar se todos os campos estão preenchidos */
    if (nomeValue === "" || emailValue === "" || telefoneValue === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    const templateHTML = `
        <li>
            <span class="info">
                <span class="info-label">Nome:</span> <span class="info-value">${nomeValue}</span>
            </span>
            <span class="info">
                <span class="info-label">Email:</span> <span class="info-value">${emailValue}</span>
            </span>
            <span class="info">
                <span class="info-label">Telefone:</span> <span class="info-value">${telefoneValue}</span>
            </span>
            <button class="edit">Editar</button>
            <button class="delete">Excluir</button>
        </li>`;

    /* Incluindo itens no HTML */
    lista.innerHTML += templateHTML;

    /* Limpando os campos */
    nome.value = "";
    email.value = "";
    telefone.value = "";

    
    updateList();
});

function updateList() {
    const items = lista.querySelectorAll("li");

    items.forEach((item, index) => {
        item.querySelector(".edit").addEventListener("click", () => {
            const values = item.querySelectorAll(".info-value");
            nome.value = values[0].textContent;
            email.value = values[1].textContent;
            telefone.value = values[2].textContent;
            item.remove();
        });

        item.querySelector(".delete").addEventListener("click", () => {
            item.remove();
        });
    });
}


updateList();
