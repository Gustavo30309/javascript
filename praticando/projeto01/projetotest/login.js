function acesso() {
    var logando = document.getElementById('usuario')
    var senha01 = document.getElementById('senha')
    var log = logando.value
    var sem = senha01.value
    if(log == 'gustavo123@gmail.com' || sem == 'apex30309') {
        var lor = document.getElementById('login')

        lor.innerHTML = <a href="pag2.html">login</a>
    }
}