var botao_cadastro = document.querySelector(".buttom")
var divPai = document.querySelector('.separa')



botao_cadastro.addEventListener("click", function(event){
    
    //event.preventDefault();

    var form = document.querySelector(".form")
    
    var apelido_usuario = form.apelido.value;
    var file_avatar = document.querySelector('#file_avatar').value
    var cidade = form.cidade.value
    var titulo_denuncia = form.titulo_denuncia.value
    var date = form.date.value
    var horario = form.horario.value
    var latitude = form.latitude.value
    var longitude = form.longitude.value
    var comentario_usuario = form.comentario_usuario.value
    var img_denuncia = form.file.value 

    console.log(apelido_usuario)
    console.log(file_avatar)
    console.log(titulo_denuncia)
    console.log(date)
    console.log(horario)
    console.log(cidade)
    console.log(latitude)
    console.log(longitude)
    console.log(img_denuncia)

    var infor_den = document.createElement('div')
    infor_den.classList.add('infor_denuncias')

    var topo_post = document.createElement('div')
    topo_post.classList.add('topo_postagem')

    var img_avatar = document.createElement('img')
    img_avatar.classList.add('avatar')
    var img_av = document.createTextNode(file_avatar)
    img_avatar.appendChild(img_av)
    topo_post.appendChild(img_avatar)

    var usuario = document.createElement('div')
    usuario.classList.add('usuario')
    topo_post.appendChild(usuario)

    var apelido_avatar = document.createElement('p')
    apelido_avatar.classList.add('apelido')
    var apelido_a = document.createTextNode(apelido_usuario)
    apelido_avatar.appendChild(apelido_a)
    usuario.appendChild(apelido_avatar)

    var cidade_denuncia = document.createElement('p')
    cidade_denuncia.classList.add('cidade')
    var cidade_d = document.createTextNode(cidade)
    cidade_denuncia.appendChild(cidade_d)

    var horario_denuncia = document.createElement('span')
    horario_denuncia.classList.add("horario")
    var horario_d = document.createTextNode(horario)
    horario_denuncia.appendChild(horario_d)
    cidade_denuncia.appendChild(horario_denuncia)
    usuario.appendChild(cidade_denuncia)

    infor_den.appendChild(topo_post)
    divPai.appendChild(infor_den)

})



