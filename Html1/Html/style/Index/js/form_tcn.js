

// funcion se ejecuta despues del resultado del captcha

function validateData() {
    let nombres = document.getElementById("nombres").value;
    let app = document.getElementById("app").value;
    let apm = document.getElementById("apm").value;
    let edad = document.getElementById("edad").value;
    let rut = document.getElementById("rut").value;
    let celular = document.getElementById("celular").value;
    let file = document.getElementById("file").value;


        // Obtener la fecha actual
    let fecha = new Date();
    let fechaFormateada = fecha.getFullYear() + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2) + '-' + ('0' + fecha.getDate()).slice(-2);
        
        // Asignar la fecha al campo de fecha en el formulario
    document.getElementById("fecha").value = fechaFormateada;

    // nombres y apellidos quen o esten vacios
    if (nombres.trim() === '' || app.trim() === '' || apm.trim() === '') {
        alert("Por favor, completa los campos de nombres y apellidos.");
        return false;
    }

    // edad
    if (edad.trim() === '' || isNaN(edad) || parseInt(edad) <= 18 || parseInt(edad) > 70) {
        alert("Por favor, ingresa una edad válida.");
        return false;
    }

    //  RUT
    if (rut.trim() === '' || !validarRut(rut)) {
        alert("Por favor, ingresa un RUT válido.");
        return false;
    }

    // número de celular
    if (celular.trim() === '' || isNaN(celular) || celular.length !== 9) {
        alert("Por favor, ingresa un número de celular válido.");
        return false;
    }


    // Si llegamos hasta aquí, todos los campos están completos y válidos
    document.getElementById('user').onclick = function() {
        if (validateData()) {
            alert('Datos validados, enviando formulario...');
            // enviar el formulario utilizando AJAX o cualquier otro método
        }
    };
    
    return true;
}

function validarRut(rut){
    rut = rut.replace(/\./g, '').replace('-', '').toUpperCase();
    const cuerpo = rut.slice(0, -1);
    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const dvEsperado = 11 - (suma % 11);
    const dv = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

    return rut.slice(-1) === dv;
}
