function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo!="f"&&sexo!="m")
	{
		sexo=prompt("reingrese f o m. ");
	}



	document.getElementById('Sexo').value=sexo;
	alert("era hora");
}//FIN DE LA FUNCIÓN