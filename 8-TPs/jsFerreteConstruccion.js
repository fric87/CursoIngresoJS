/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var resultado;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro=(ancho+largo+ancho+largo);
	resultado=(perimetro*3);
	alert("usted debe comprar "+resultado+" metros de alambre");
}
function Circulo () 
{
	var radio;
	var perimetro;
	var resultado;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	perimetro=(radio*2*3.14);
	resultado=(perimetro*3);
	alert("usted debe comprar "+resultado+" metros de alambre");
}
function Materiales () 
{
	var largo;
	var ancho;
	var metrosCuadrados;
	var cal;
	var cemento;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	metrosCuadrados=(largo*ancho);
	cal=(metrosCuadrados*3);
	cemento=(metrosCuadrados*2);
	alert("usted necesita "+cal+" bolsas de cal y "+cemento+" bolsas de cemento");




}