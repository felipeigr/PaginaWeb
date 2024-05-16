function validateData() {
    let nombres = document.getElementById("nombres").value;
    let app = document.getElementById("app").value;
    let apm = document.getElementById("apm").value;
    let edad = document.getElementById("edad").value;
    let rut = document.getElementById("rut").value;
    let celular = document.getElementById("celular").value;
    let fecha = document.getElementById("fecha").value;
    let file = document.getElementById("file").value;


    if (nombres.trim() === '' || app.trim() === '' || apm.trim() === '') {
        alert("Por favor, completa los campos de nombres y apellidos.");
        return false; 
    }

    // Validar edad
    if (edad.trim() === '' || isNaN(edad) || parseInt(edad) <= 18 || parseInt(edad) > 70) {
        alert("Por favor, ingresa una edad válida.");
        return false; 
    }

    // Validar RUT
    if (rut.trim() === '' || !validarRut(rut)) {
        alert("Por favor, ingresa un RUT válido.");
        return false; 
    }

    // Validar número de celular
    if (celular.trim() === '' || isNaN(celular) || celular.length !== 9) {
        alert("Por favor, ingresa un número de celular válido.");
        return false; 
    }

    // Validar fecha (opcional)
    if (fecha.trim() === '') {
        alert("Por favor, selecciona una fecha.");
        return false;
    }

    // Validar archivo (opcional)
    if (file.trim() === '') {
        alert("Por favor, selecciona un archivo.");
        return false; 
    }

    
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