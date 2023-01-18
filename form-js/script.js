const form = document.getElementById("form");
const nameInput = document.querySelector("#nome");
const emailInput = document.getElementById("email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.getElementById("job");
const messageTextarea = document.getElementById("message");

console.log(form, nameInput, emailInput);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o preenchido é válido
    if (emailInput.value === "" || !isMailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se está preenchida
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos.");
        return;
    }

    // verificar se a situaçãofoi selecionada
    if (jobSelect.value === "") {
        alert("Por favor, selecione a sua situação.");
        return;
    }


     // verificar se a mensagem foi escrita
     if (message.value === "") {
        alert("Por favor, escreva sua mensagem.");
        return;
    }


    // Se todos os campos estiverem preenchidos, envie o form
    form.submit();
});

// Função que valida e-mail
function isMailValid(email) {
    //cria uma regex para validar e mail
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        return true; // se for válida
    }
    return false; // se for inválida
}