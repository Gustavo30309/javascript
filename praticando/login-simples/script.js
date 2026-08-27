function confirmar() {
    var user = document.getElementById("user")
    var senha = document.getElementById("senha")
    var msg = document.getElementById("msg")

    if(user.value == "adm123" && senha.value == "123") {
        location.href = "pag02.html"
    } else {
        var msgerro = `Usuario ou Senha INCORRETO! <br> Tente NOVAMENTE`
        msg.innerHTML = msgerro
    }
    user.value = ""
    senha.value = ""
} 