/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	var resultadoFinal;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	resultado = parseInt(numeroUno) + parseInt(numeroDos);
	resultadoFinal= resultado.toString();

	alert("el resultado es " + resultadoFinal);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var resultadoFinal;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	resultado = parseInt(numeroUno) - parseInt(numeroDos);
	resultadoFinal= resultado.toString();

	alert("el resultado es " + resultadoFinal);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	var resultadoFinal;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	resultado = parseInt(numeroUno) * parseInt(numeroDos);
	resultadoFinal= resultado.toString();

	alert("el resultado es " + resultadoFinal);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var resultadoFinal;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	resultado = parseInt(numeroUno) / parseInt(numeroDos);
	resultadoFinal= resultado.toString();

	alert("el resultado es " + resultadoFinal);
}

