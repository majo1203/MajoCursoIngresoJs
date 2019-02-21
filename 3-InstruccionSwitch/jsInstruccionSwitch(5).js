function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var hora = parseInt(laHora);
var mensaje;
switch (true) {
	case hora >= 7 && hora <= 11:
	mensaje = "Es de mañana.";
	break;
}

alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN