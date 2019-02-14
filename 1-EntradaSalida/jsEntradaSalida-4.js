/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var elNombre;
	var respuesta;

	respuesta = prompt("ingrese su nombre");
	elNombre = document.getElementById("elNombre").value;

	alert("Su nombre es " + respuesta);

}