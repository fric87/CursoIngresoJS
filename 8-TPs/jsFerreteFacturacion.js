/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	precioTotal=(precioUno+precioDos+precioTres);
	alert("El precio total es $ "+precioTotal);




}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	promedio=((precioUno+precioDos+precioTres)/3);
	alert("el  promedio es "+promedio);	







}
function PrecioFinal () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var precioBruto;
	var precioFinal;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	precioBruto=(precioUno+precioDos+precioTres);
	precioFinal=(precioBruto+(precioBruto*0.21));
	alert("el precio final con IVA incluido es $"+precioFinal);







}