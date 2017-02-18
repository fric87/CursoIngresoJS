function Mostrar()
{

	var contador=0;
	var edad;
	var maximo;
	var minimo;
	var nombre;
	var nombreDelMayor;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var bandera="nadie";
	var nombreDiez;
	var sexoDiez;
	var edadDiez;



	// declarar variables
	
	var respuesta='si';

		while(respuesta!='no')
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);

			while(edad<0||edad>100)
			{
				edad=prompt("edad invalida, por favor reingrese edad");
				edad=parseInt(edad);
			}

				sexo=prompt("por favor ingrese su sexo");

				while(sexo!="f"&&sexo!="m")
				{
					sexo=prompt("sexo invalido, por favor ingrese f o m" );
				}

				nota=prompt("ingresar nota");
				nota=parseInt(nota);

				while(nota<0||nota>10)
				{
					nota=prompt("reingrese una nota entre 0 y 10");
					nota=parseInt(nota);

				}
					if(nota=="10"&&bandera==nadie)
					{
					nombreDiez=nombre;
					sexoDiez=sexo;
					edadDiez=edad;
					bandera="nada";	           //nombre sexo y edad
					}


				//cantidad de personas aprobadas

			contador++;
			nombre=prompt("por favor ingrese nombre");

				if(contador==1)
				{
					maximo=edad;
					minimo=edad;
				}
		else
		{
			if(edad=maximo)
			{
				maximo=edad;
				nombreDelMayor=nombre;
			}

			if(edad=minimo)
			{
				minimo=edad;
			}

		}
		
				
				if(contador==1)
				{
					contador++;
					notaMinima=nota;


				}

				else

				{
					if(nota=notaMinima)
					{
						notaMinima=nota;
						sexoNotaMinima=sexo;
					}


				}
			









		respuesta=prompt("para salir teclee NO");
		}


//verifivar si aprobo
//cantidad de mujeres que aprobaron con nota par y son menores de edad
}//FIN DE LA FUNCIÓN