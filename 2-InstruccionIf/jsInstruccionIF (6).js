function mostrar()
{
//tomo la edad  
var edad = parseInt(edad);
var mensaje;

edad = document.getElementById('edad').value;

if (edad >= 18) {
	mensaje = "Usted es mayor de edad.";
}else if (edad >= 13 && edad <= 17) {
	mensaje = "Usted es un adolescente";
} if (edad <= 13) {
	mensaje = "Usted es un niño.";
}
alert(mensaje);


}//FIN DE LA FUNCIÓN