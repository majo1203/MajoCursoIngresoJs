function mostrar()
{
//tomo la edad  
var edad = parseInt(edad);
var mensaje;

edad = document.getElementById('edad').value;

if ( edad >= 0 && edad <= 12) {
	mensaje = "Usted no es adolescente.";
}else if (edad >= 17) {
	mensaje = "Usted no es un adolescente.";
}

alert(mensaje);

}//FIN DE LA FUNCIÓN