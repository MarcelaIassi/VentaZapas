// Campos del formulario contacto

//var apellido = document.getElementById('apellido');
//var nombre = document.getElementById('nombre');
//var email = document.getElementById('email');
//var celular = document.getElementById('celular');
//var error = document.getElementById('error');

//var errorMensajes = [];

(function(){
  //Variables
  var formulario = document.getElementsByName('formulario')[0];
  
  var validarNombre = function(e){
      if (formulario.nombre.value == ""){
          alert("Ingrese su Nombre");
          
          e.preventDefault();

          //Evita que un enlace abra la URL
      }
  };
  var validarApellido = function(e){
    if (formulario.apellido.value == ""){
        alert("Ingrese su Apellido");
        e.preventDefault();
    }
  };
  var validarMail = function(e){
    if (formulario.email.value == ""){
        alert("Ingrese su e-mail");
        e.preventDefault();
    }
  };
  var validar = function(e){
      validarNombre(e);
      validarApellido(e);
      validarMail(e);
  };

  formulario.addEventListener("submit", validar);


}())





  


//window.onload = enviarFormulario;


/*var error = document.getElementById("error");*/
//function enviarFormulario(){
//    document.getElementById("enviar").addEventListener('click',validar,false);
//}

//function validaApellido(){
//    var apellido = document.getElementById("apellido");
//    if(apellido.value == " "){
//       alert("Ingrese su Apellido");
//       return false;
//    }
//    return true;
//}
//function validar(e){
//    if(validaApellido() && confirm("Pulsa Enviar si deseas enviar tus datos")){
//        return true;
//    }else{
//        e.preventDefault();
//        return false;
//    }
//}



