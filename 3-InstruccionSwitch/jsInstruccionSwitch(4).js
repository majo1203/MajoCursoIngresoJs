function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch (mesDelAño){
	case "Febrero":
	mensaje= "Este mes no tiene mas de 28 días.";
	break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	mensaje= "Este mes tiene 30 días.";
	break;
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	mensaje= "Este mes tiene 31 días.";
	break;
}

	alert (mensaje);
	
	



}//FIN DE LA FUNCIÓN