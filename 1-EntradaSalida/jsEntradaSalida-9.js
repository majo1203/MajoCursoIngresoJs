/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var Resultado;
	var aumento;

	sueldo = document.getElementById("sueldo").value;
	Resultado = document.getElementById("Resultado");
	aumento = (sueldo) 10% (Resultado);

	alert("Su resultado es " + Resultado);
	
}
