function verificar() {
    var pais = document.getElementById('txtp')
    var res = document.getElementById('res')
    var p = String(pais.value)

    if (pais.value.length == "") {
        window.alert('[ERRO] Preencha os Dados!')
    } else {
        if (p == "brasil" || p == 'Brasil') {
            res.innerHTML = ('Você é Brasileiro')
        } else {
            res.innerHTML = ('Você é Estrangeiro')
        }
        
    }
    
}