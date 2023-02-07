function verificar() {
    var pais = document.getElementById('txtp')
    var res = document.getElementById('res')
    var p = String(pais.value)

    if (p == "brasil") {
        res.innerHTML = ('Você é Brasileiro')
    } else {
        res.innerHTML = ('Você é Estrangeiro')
    }
    
}