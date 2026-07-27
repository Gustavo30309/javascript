function contar() {
    var tn1 = document.getElementById('txtn1').value
    var tn2 = document.getElementById('txtn2').value
    var tn3 = document.getElementById('txtn3').value

    var n1 = Number(tn1)
    var n2 = Number(tn2)
    var n3 = Number(tn3)

    var res = document.getElementById('res')
    res.innerHTML = 'Contando: ' // Limpa e inicia
    
    // CORREÇÃO: loop for correto
    for(var i = n1; i <= n2; i += n3) {
        res.innerHTML += ` ${i} \u{1F449}` // \u{1F449} = 👉
    }
    
    res.innerHTML += `\u{1F3C1}` // \u{1F3C1} = 🏁
}