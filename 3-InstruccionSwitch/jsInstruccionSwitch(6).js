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
	case hora >= 12 && hora <= 19:
	mensaje = "Es de tarde.";
	break;
	case hora >= 20 && hora <= 24:
	mensaje = "Es de noche.";
	break;
	case hora == 0 || hora == 24:
	mensaje = "La hora no existe.";
	break;
}



alert(mensaje);
	
}

//FIN DE LA FUNCIÓN