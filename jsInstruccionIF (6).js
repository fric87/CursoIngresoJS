function Mostrar()
{
//tomo la edad  

var edad
edad=document.getElementById('edad').value;
		
		if(edad>0&&edad<13)
		{
			alert("sos un niño")
		}
  			if(edad>12&&edad<18)
  			{
  				alert("sos un adolescente")
  			}
  				else
  				{
  					alert("sos mayor de edad")//pone las comillas si es un nombre!!!!
  				}




}//FIN DE LA FUNCIÓN