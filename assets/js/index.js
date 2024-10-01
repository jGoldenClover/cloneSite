function mostarSenha(){
    //importando os cara da tela
    var  inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('eye-icon')
    var btnShowClose = document.getElementById('passwordStat')

    //verifica se o input é tipo password
    if(inputPass.type === 'password'){
        //se for senha, muda pra texto
        inputPass.setAttribute('type','text')
        btnShowClose.setAttribute('src' , './assets/img/naoVerSenha.png')
    }
    else{
        //se for texto, muda pra senha
        inputPass.setAttribute('type','password')
        btnShowClose.setAttribute('src' , './assets/img/verSenha.png')
    }
}