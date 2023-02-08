function verificar() {
    var pais = document.getElementById('txtp')
    var res = document.getElementById('res')
    var p = String(pais.value)

    if (pais.value.length == "") {
        window.alert('[ERRO] Preencha os Dados!')
    } else {
        if (p == "brasil" || p == 'Brasil' || p == "Brazil" || p == "brazil") {
            res.innerHTML = ('Você é <strong>Brasileiro</strong>')
        } else {
            res.innerHTML = ('Você é <strong>Estrangeiro</strong>')
        }
        document.getElementById('txtp').value='';
    }
    
}