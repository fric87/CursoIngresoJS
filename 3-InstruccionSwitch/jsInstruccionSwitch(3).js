function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)

{

/*		case"Enero":
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
		case"Julio":
		case"Agosto":
		case"Septiembre":         ESTA ES UNA FORMA CORRECTA TAMBIEN
		case"Octubre":
		case"Noviembre":
		case"Diciembre":*/
		default:
		alert("este mes tiene 30 o mas dias");
		break;

		case"Febrero":
		alert("este mes no tiene mas de 29 dias");
		break;




}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN