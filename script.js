function verificar() {
    var pais = document.getElementById('txtp')
    var res = document.getElementById('res')
    var p = String(pais.value)
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    if (pais.value.length == "") {
        window.alert('[ERRO] Preencha os Dados!')
    } else {
        if (p == "brasil " || p == 'Brasil ' || p == "Brazil " || p == "brazil " || p == "brasil" || p == 'Brasil' || p == "Brazil" || p == "brazil") { 
            res.innerHTML = ('Você é <strong>Brasileiro</strong>')
            img.setAttribute('src','imagens/brasil.jpg')
            
        } else if (p == 'Abkházia'|| p ==
        'Abu Dhabi'|| p ==
        'Aceh'|| p ==
        'Açores'|| p ==
        'Adjária'|| p ==
        'Afeganistão'|| p ==
        'África do Sul'|| p ==
        'Ajman'|| p ==
        'Akrotiri'|| p ==
        'Aland (Ilhas)'|| p ==
        'Alaska'|| p ==
        'Albânia'|| p ==
        'Alderney'|| p ==
        'Alemanha'|| p ==
        'Anatólia'|| p ==
        'Andorra'|| p ==
        'Angola'|| p ==
        'Anguilla'|| p ==
        'Antártica Argentina'|| p ==
        'Antártica Brasileira'|| p ==
        'Antártica Chilena'|| p ==
        'Antártica Sul-Africana (Ilhas Príncipe Eduardo)'|| p ==
        'Antígua e Barbuda'|| p ==
        'Aotearoa (Nova Zelândia)'|| p ==
        'Arábia Saudita'|| p ==
        'Argélia'|| p ==
        'Argentina'|| p ==
        'Armênia'|| p ==
        'Aruba'|| p ==
        'Ascensão'|| p ==
        'Ashmore e Cartier (Ilhas)'|| p ==
        'Austrália'|| p ==
        'Áustria'|| p ==
        'Azerbaidjão'|| p ==
        'Bahamas'|| p ==
        'Baker (Ilha)'|| p ==
        'Baleares (Ilhas)'|| p ==
        'Bangladesh'|| p ==
        'Barbados'|| p ==
        'Barein'|| p ==
        'Bassas da Índia'|| p ==
        'Baviera (Bavária)'|| p ==
        'Belarus'|| p ==
        'Bélgica'|| p ==
        'Belize'|| p ==
        'Benin'|| p ==
        'Bermudas'|| p ==
        'Birmânia (Mianmar)'|| p ==
        'Bolívia'|| p ==
        'Bósnia-Herzegóvina'|| p ==
        'Botsuana'|| p ==
        'Bouvet (Ilha)'|| p ==
        'Brunei'|| p ==
        'Bulgária'|| p ==
        'Burkina Fasso'|| p ==
        'Burundi'|| p ==
        'Butão'|| p ==
        'Cabo Verde'|| p ==
        'Cachemira Indiana'|| p ==
        'Cachemira Paquistanesa'|| p ==
        'Camarões'|| p ==
        'Camboja'|| p ==
        'Canadá'|| p ==
        'Canal (Ilhas do)'|| p ==
        'Canárias (Ilhas)'|| p ==
        'Caribe Holandês'|| p ==
        'Catar (Qatar)'|| p ==
        'Cayman (Ilhas)'|| p ==
        'Cazaquistão'|| p ==
        'Centro-Africana (Rep.)'|| p ==
        'Ceuta'|| p ==
        'Chade'|| p ==
        'Chile'|| p ==
        'China'|| p ==
        'Chipre'|| p ==
        'Chipre do Norte'|| p ==
        'Christmas (V. Ilha Natal)'|| p ==
        'Cingapura'|| p ==
        'Cisjordânia (West Bank)'|| p ==
        'Clipperton (Ilha)'|| p ==
        'Cocos (Ilhas Keeling)'|| p ==
        'Colinas de Golan'|| p ==
        'Colômbia'|| p ==
        'Comores'|| p ==
        'Congo (Rep. do)'|| p ==
        'Congo (Rep. Dem. do)'|| p ==
        'Cook (Ilhas)'|| p ==
        'Coral (Ilhas do Mar de)'|| p ==
        'Coréia do Norte'|| p ==
        'Coréia do Sul'|| p ==
        'Córsega'|| p ==
        'Costa do Marfim (V. Côte-d Ivoire)'|| p ==
        'Costa Rica'|| p ==
        'Costa do Marfim'|| p ==
        'Coveite (V. Kuweit)'|| p ==
        'Crimeia'|| p ==
        'Croácia'|| p ==
        'Cuba'|| p ==
        'Curaçao'|| p ==
        'Curdistão'|| p ==
        'Damão e Diu'|| p ==
        'Dependência de Ross'|| p ==
        'Dhekelia'|| p ==
        'Dinamarca'|| p ==
        'Dominica'|| p ==
        'Dominicana (Rep.)'|| p ==
        'Dubai'|| p ==
        'Egito'|| p ==
        'El Salvador'|| p ==
        'Emirados Árabes Unidos'|| p ==
        'Equador'|| p ==
        'Escócia'|| p ==
        'Eslováquia'|| p ==
        'Eslovênia'|| p ==
        'Espanha'|| p ==
        'Estados Unidos'|| p ==
        'Estônia'|| p ==
        'Etiópia'|| p ==
        'Faixa de Gaza'|| p ==
        'Ilhas Malvinas'|| p ==
        'Bósnia'|| p ==
        'Filipinas'|| p ==
        'Finlândia'|| p ==
        'França'|| p ==
        'Gabão'|| p ==
        'País de Gales'|| p ==
        'Gâmbia'|| p ==
        'Gana'|| p ==
        'Gaza'|| p ==
        'Geórgia'|| p ==
        'Grã-Bretanha'|| p ==
        'Granada'|| p ==
        'Grécia'|| p ==
        'Groenlândia'|| p ==
        'Guadalupe'|| p ==
        'Guatemala'|| p ==
        'Guernsey'|| p ==
        'Guernsey e Dependências'|| p ==
        'Guiana'|| p ==
        'Guiana Francesa'|| p ==
        'Guiné'|| p ==
        'Guiné-Bissau'|| p ==
        'Guiné Equatorial'|| p ==
        'Haiti'|| p ==
        'Havaí'|| p ==
        'Holanda'|| p ==
        'Honduras'|| p ==
        'Hong Kong'|| p ==
        'Hungria'|| p ==
        'Iêmen'|| p ==
        'Índia'|| p ==
        'Indonésia'|| p ==
        'Inglaterra'|| p ==
        'Irã'|| p ==
        'Iraque'|| p ==
        'Irlanda'|| p ==
        'Irlanda do Norte'|| p ==
        'Islândia'|| p ==
        'Israel'|| p ==
        'Itália'|| p ==
        'Jamaica'|| p ==
        'Japão'|| p ==
        'Jersey'|| p ==
        'Jerusalém Oriental'|| p ==
        'Jordânia'|| p ==
        'Kossovo'|| p ==
        'Kuweit'|| p ==
        'Letônia'|| p ==
        'Líbano'|| p ==
        'Libéria'|| p ==
        'Líbia'|| p ==
        'Lituânia'|| p ==
        'Luxemburgo'|| p ==
        'Macau'|| p ==
        'Macedônia'|| p ==
        'Madagáscar'|| p ==
        'Malásia'|| p ==
        'Malauí'|| p ==
        'Maldivas'|| p ==
        'Mali'|| p ==
        'Malta'|| p ==
        'Marrocos'|| p ==
        'Martinica'|| p ==
        'Mauritânia'|| p ==
        'México'|| p ==
        'Moçambique'|| p ==
        'Moldávia'|| p ==
        'Mônaco'|| p ==
        'Mongólia'|| p ==
        'Monte Athos'|| p ==
        'Montenegro'|| p ==
        'Montserrat'|| p ==
        'Nepal'|| p ==
        'Nicarágua'|| p ==
        'Níger'|| p ==
        'Nigéria'|| p ==
        'Noruega'|| p ==
        'Nova Zelândia'|| p ==
        'Omã'|| p ==
        'País de Gales'|| p ==
        'Países Baixos'|| p ==
        'Palestina'|| p ==
        'Panamá'|| p ==
        'Paquistão'|| p ==
        'Paraguai'|| p ==
        'Páscoa'|| p ==
        'Peru'|| p ==
        'Polinésia Francesa'|| p ==
        'Polônia'|| p ==
        'Porto Rico'|| p ==
        'Portugal'|| p ==
        'Qatar'|| p ==
        'Quênia'|| p ==
        'Quirguistão'|| p ==
        'Reino Unido'|| p ==
        'República Centro-Africana'|| p ==
        'República do Congo'|| p ==
        'República Democrática do Congo'|| p ==
        'República Dominicana'|| p ==
        'República Sérvia da Bósnia'|| p ==
        'República Tcheca'|| p ==
        'Romênia'|| p ==
        'Ruanda'|| p ==
        'Rússia'|| p ==
        'Saara Ocidental'|| p ==
        'Saba'|| p ==
        'Sabah'|| p ==
        'Samoa'|| p ==
        'Samoa Americana'|| p ==
        'San Marino'|| p ==
        'Santa Helena e Dependências'|| p ==
        'Santa Lúcia'|| p ==
        'São Bartolomeu'|| p ==
        'São Cristóvão e Névis'|| p ==
        'São Eustáquio'|| p ==
        'Saxônia'|| p ==
        'Senegal'|| p ==
        'Serra Leoa'|| p ==
        'Sérvia'|| p ==
        'Sharja'|| p ==
        'Sicília'|| p ==
        'Siquim'|| p ==
        'Síria'|| p ==
        'Somália'|| p ==
        'Sri Lanka'|| p ==
        'Suazilândia'|| p ==
        'Sudão'|| p ==
        'Sudão do Sul'|| p ==
        'Suécia'|| p ==
        'Suíça'|| p ==
        'Suriname'|| p ==
        'Tadjiquistão'|| p ==
        'Tailândia'|| p ==
        'Taiwan'|| p ==
        'Tanzânia'|| p ==
        'Tibete'|| p ==
        'Timor-Leste'|| p ==
        'Togo'|| p ==
        'Trinidad e Tobago'|| p ==
        'Tunísia'|| p ==
        'Turquia'|| p ==
        'Tuvalu'|| p ==
        'Ucrânia'|| p ==
        'Uganda'|| p ==
        'Uruguai'|| p ==
        'Uzbequistão'|| p ==
        'Vanuatu'|| p ==
        'Vaticano'|| p ==
        'Venezuela'|| p ==
        'Vietnã'|| p ==
        'Zâmbia'|| p ==
        'Zimbábue') {
            res.innerHTML = (`Você é <strong>Estrangeiro</strong>, pois nasceu na <strong>${p}</strong>, e não no <strong>Brasil</strong>!`)
        } else {
            res.innerHTML = ('Pais <strong>Não Encontrado!</strong>')
        }
        document.getElementById('txtp').value='';
        res.appendChild(img)
    }
    
}