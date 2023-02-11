function verificar() {
    var pais = document.getElementById('txtp')
    var res = document.getElementById('res')
    var p = String(pais.value)
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    if (pais.value.length == "") {
        window.alert('[ERRO] Preencha os Dados!')
    } else {
        if (p == "brasil" || p == 'Brasil' || p == "Brazil" || p == "brazil") { 
            res.innerHTML = ('Você é <strong>Brasileiro</strong>')
            img.setAttribute('src','imagens/brasil.jpg')
            
        } else {
            res.innerHTML = ('Você é <strong>Estrangeiro</strong>')
        }
        document.getElementById('txtp').value='';
        res.appendChild(img)
    }
    
}