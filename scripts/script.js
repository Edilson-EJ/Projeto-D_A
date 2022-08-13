var botao_cadastro = document.querySelector(".buttom")

console.log(botao_cadastro)

botao_cadastro.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector(".form")
    
    var apelido = form.apelido.value;
    var file_avatar = form.myfile.value
    var titulo_denuncia = form.titulo_denuncia.value
    var date = form.date.value
    var horario = form.horario.value
    var latitude = form.latitude.value
    var longitude = form.longitude.value
    var comentario_usuario = form.comentario_usuario.value
    var img_denuncia = form.file.value 

    console.log(apelido)
    console.log(file_avatar)
    console.log(titulo_denuncia)
    console.log(date)
    console.log(horario)
    console.log(latitude)
    console.log(longitude)
    console.log(img_denuncia)


    
})