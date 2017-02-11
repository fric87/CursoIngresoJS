function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)

{
	case"Enero":
	case"Febrero":
	case"Marzo":
	case"Abril":
	case"Mayo":
	case"Junio":
	alert("falta para el inviernoo!!!");
	break;


	case"Julio":
	case"Agosto":
	alert("abrigate que hace frio!!!!");
	break;


	case"Septiembre":
	case"Octubre":
	case"Noviembre":
	case"diciembre":
	alert("ya pasamos el frio ahora aguanta el calor!!!")
	break;
}


}//FIN DE LA FUNCIÓN