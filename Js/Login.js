const logado = JSON.parse(sessionStorage.getItem("controleLogin.logado"))
const formLogin = document.querySelector('form');

//Construindo loguin e senha no DOM
formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    //criação de usuário e senha
    let usuario = document.getElementById('name-5a86');
    let senha = document.getElementById('current-password');

    if (usuario.value == "Aiko" && senha.value == "Testeaiko" ) {
         localStorage.setItem("controleLogin.logado", true);
         window.location = "Index.html"
    } else{
        sessionStorage.setItem("controleLogin.logado", false)
        alert("Usuário ou senha incorretors")
    }
})
