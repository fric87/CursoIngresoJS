function Mostrar()
{

var mascota=0;
var contadorSi=0;
var contadorNo=0;
var edad=0
var edadMaximaSinGato;
var nombre;
var nombreDelGato;
var sexo;
var edadDelGato;


for(contador=0;contador<1000;contador++)
	{

		nombre=prompt("como te llamas??");
		edad=prompt("que edad tenes");                                 //pregunta edad
		edad=parseInt(edad);
		if(edad<0||edad>100)
		{
			edad=prompt("ingrese una numero de 1 a 100");
		}

		sexo=prompt("ingrese su sexo... (F o M) ");
			if(sexo!="F"&&sexo!="M")
			{
				sexo=prompt("por favor ingrese solo F o M ");
			}
		
		mascota=prompt("tenes massscota");                               //pregunta massscota
		

	

			if(mascota=="si")  												//mascota si
			{
				contadorSi=contadorSi+1;

				mascota=prompt("que tipo de mascota tenes");

					if(mascota!="perro"&&mascota!="gato")
					{
						mascota=prompt("ingrese perro o gato");
					}

					if(mascota=="gato")
					{
						nombreDelGato=prompt("como se llama su gatito");
						edadDelGato=prompt("que edad tiene su gatito");
						edadDelGato=parseInt(edadDelGato);
							if(edadDelGato<0||edadDelGato>20)
								edadDelGato=prompt("ningun gato vive tanto ingrese un numero de 0 a 20");
					}

			}


			else															//mascota no
			{
				contadorNo=contadorNo+1;

				if(contadorNo==1)
				{
					edadMaximaSinGato=edad;
				}

						else
						{
							if(edad>edadMaximaSinGato)
							{
								edadMaximaSinGato=edad;							//edad maxima q no tiene gato
							}
						}


			}



			if(sexo=="F"&&edad>30&&edadDelGato<6)
			{
				alert("el nombre del gato es "+nombreDelGato);
			}

	
	}


}
//necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 años de edad.