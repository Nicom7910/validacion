function validar() {

    var nombre,mail,contra;

    nombre=document.getElementById("nombre").value;
    mail=document.getElementById("correo").value;
    contra=document.getElementById("contra").value;

    if (nombre === null || mail === null|| contra === null){
        alert("El campo nombre se encuentra vacio");
        return false;
    }

    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
	return false;
	}
	
	else{
		alert("Formulario registrao");
	}
}

}
function validar1() {

    var mail,contra;

    mail=document.getElementById("email").value;
    contra=document.getElementById("contraseña").value;
    
    if (mail === null|| contra === null){
        alert("El campo nombre se encuentra vacio");
        return false;
    }

}
