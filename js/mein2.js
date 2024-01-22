function validar(formulario){
    var re1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re1.test(formulario.nombre1.value)) {
     alert("Email inválido");
     return false;
    }
    if (formulario.password.value.trim().length <=8){
        alert("La contraseña debe tener mas de 8 caracteres");
        return false;
    }
    if (formulario.password.value != formulario.confimacioDeContrasena1.value){
        alert("La contraseña no coincide");
        return false;
    }
    if (formulario.opciones.value ==""){
        alert("Elige un opcion de genero");
        return false;
    }
    if(formulario.edad.value ==""){
        alert("Elige un rango de edad");
        return false;
    }
    if(!formulario.terminos.checked ==""){
        alert("Debe aceptar los terminos");
        return false;
    }
}  
