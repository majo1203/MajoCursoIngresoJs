function mostrar()
{
//tomo la edad  
var edad = parseInt(edad);
var mensaje;

edad = document.getElementById('edad').value;

if (edad >= 13 && edad <= 17) {
	mensaje = "Usted es un adolescente.";
}
alert(mensaje);

}//FIN DE LA FUNCIÓN