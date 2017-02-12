/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	

	var sueldo;
	var descuento;
	var resultado;
	sueldo=document.getElementById('numeroDividendo').value;
	descuento=document.getElementById('numeroDivisor').value;
	sueldo=parseInt(sueldo);  
	descuento=parseInt(descuento);
	resultado=(sueldo%descuento);
	alert(resultado);











}
