function mostrar()
{
//tomo la edad  
var edad = parseInt(edad);
var mensaje;

edad = document.getElementById('edad').value;

if (edad >= 18) {
	mensaje = "Usted es mayor de edad.";
	}else if (edad <= 18) {
		mensaje = "Usted es menor de edad.";

	}

alert(mensaje);
}//FIN DE LA FUNCIÓN