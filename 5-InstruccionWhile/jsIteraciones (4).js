function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

		while(numero>9)
		{
			numero=prompt("reingrese el numero entre 0 y 9");
		}

		
		document.getElementById('Numero').value=numero;
		alert("bien");

}//FIN DE LA FUNCIÓN