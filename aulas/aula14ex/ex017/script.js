function verificar() {
    var num = document.getElementById('num')
    var ver = num.value
    var msg = document.getElementById('msg')
        if (ver == 1) {
        var t = 'A tabuado do numero 1 é '
        var ty = '1 x 1 = 1'
        document.getElementById('msg').textContent = t
        document.getElementById('msg').textContent += ty

    }
}