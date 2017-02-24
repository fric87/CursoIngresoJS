function Mostrar()
{

	var contador=0;
	var edad;
	var edadMaxima;
	var edadMinima;
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

		while(respuesta!='NO')
		{
			nombre=prompt("por favor ingrese nombre");                              //nombre
			edad=prompt("ingrese edad");                             				//edad
			edad=parseInt(edad);													

					 while(edad<0||edad>100)
					{
					 	edad=prompt("edad invalida, por favor reingrese edad");
						edad=parseInt(edad);
					}

			sexo=prompt("por favor ingrese su sexo");							//sexo

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
					
			if(nota=="10"&&bandera=="nadie")     					 //primer persona q se saco 10
					{
					nombreDiez=nombre;
					sexoDiez=sexo;
					edadDiez=edad;
					bandera="cambie la bandera para q sea el primero";	           
					}


				

					contador++;   									//cantidad de personas aprobadas
					

						if(contador==1)
						{
							edadMaxima=edad;
							edadMinima=edad;
						}
						else
						{
							if(edad>edadMaxima)
							{
								edadMaxima=edad;
								nombreDelMayor=nombre;
							}

							if(edad<edadMinima)
							{
								edadMinima=edad;
							}

						}
		
				
				if(contador==1)    //nota minima y sexo de la nota minima
				{
					
					notaMinima=nota;
				}

				else

				{
					if(nota<notaMinima)
					{
						notaMinima=nota;
						sexoNotaMinima=sexo;
					}


				}
			









		respuesta=prompt("para salir teclee NO");
		}

//pedir nota
//verifivar si aprobo
//cantidad de mujeres que aprobaron con nota par y son menores de edad
}//FIN DE LA FUNCIÓN