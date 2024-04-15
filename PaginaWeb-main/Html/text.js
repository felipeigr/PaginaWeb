function validateMailFormat(){

    if(validateFields()){
        const input = document.getElementById('mail');
        const mail = input.value
        var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(format.test(mail)){
            alert('Email correcto')
            console.log('prueba console log')
            return true;
    
        }else{
            alert('email invalido')
            return true;
        }



    }
}

function validateFields(){
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;
    if(mail.length &password.length > 5){
        return true;
    }else{
        return false
    }


}




