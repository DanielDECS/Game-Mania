function showMenu() {
    let menu = document.getElementById("menu");

    if(getComputedStyle(menu).display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none"
    }
}

function registerUser() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    alert("O Usuário: " + nome + " de email: " + email + " foi cadastrado com sucesso");
}