window.onload = enviarFormulario;


/*var error = document.getElementById("error");*/
function enviarFormulario(){
    document.getElementById("enviar").addEventListener('click',validar,false);
}

function validaApellido(){
    var apellido = document.getElementById("apellido");
    if(apellido.value == " "){
       alert("Ingrese su Apellido");
       return false;
    }
    return true;
}
function validar(e){
    if(validaApellido() && confirm("Pulsa Enviar si deseas enviar tus datos")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}



/*console.log("Enviando formulario....");
var mensajesError = [];
error.innerHTML = mensajesError.join(" , ");
return false;*/