/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{


		var sueldoBruto;
		var aumento;
		var resultado;
		sueldoBruto=document.getElementById('sueldo').value;
		sueldoBruto=parseInt(sueldoBruto);
		aumento=(sueldoBruto*0.1);
		resultado=(sueldoBruto+aumento);
		document.getElementById('resultado').value=resultado;



	
}
