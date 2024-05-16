$(document).ready(function(){
    $('.btn').click(function(){
        var username = $('#username').val();
        var password = $('#password').val();

        // Aquí deberías realizar la validación de las credenciales.
        // Por simplicidad, voy a suponer que las credenciales son "admin" y "password".

        if(username === 'admin' && password === 'password') {
            // Credenciales correctas, redirigir a la siguiente página
            window.location.href = 'siguiente_pagina.html';
        } else {
            // Credenciales incorrectas, resaltar los campos de texto
            $('.login input[type="text"], .login input[type="password"]').css('border', '2px solid red');
        }
    });
});
