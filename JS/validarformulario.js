var nombre = document.getElementById("nombre");
var error = document.getElementById("error");


function enviarFormulario(){
    console.log("Enviando formulario....");
    var mensajesError = [];

    if(nombre.value === " "){
       mensajesError.push("Ingrese su Nombre");
    }
    error.innerHTML = mensajesError.join(" , ");
    return false;
}