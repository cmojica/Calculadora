//Variables globales
var numeroEnPantalla="0";
var numeroEnPantalla1=1;
var deciman=0
var introducido="0";
var pantalla=document.getElementById("display");
var numOculto=0;
var Operador=0;
	
//Cargar la pantalla de la calculadora
window.onload=function cargar(){
	pantalla=document.getElementById("display");
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("on").addEventListener("mousedown", mouseDownOn);
document.getElementById("on").addEventListener("mouseup", mouseUpOn);
//Funcion para el numero 0
document.getElementById('on').onclick=function numeros(){
	if (numeroEnPantalla="0"){
		document.getElementById('display').innerHTML="0";		
	}
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("7").addEventListener("mousedown", mouseDown7	);
document.getElementById("7").addEventListener("mouseup", mouseUp7);
//Función para introducir el numero 7
document.getElementById('7').onclick=function numeros(){
	introducido=7;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("8").addEventListener("mousedown", mouseDown8);
document.getElementById("8").addEventListener("mouseup", mouseUp8);
//Función para introducir el numero 8
document.getElementById('8').onclick=function numeros(){	
	introducido=8;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("9").addEventListener("mousedown", mouseDown9);
document.getElementById("9").addEventListener("mouseup", mouseUp9);
//Función para introducir el numero 9
document.getElementById('9').onclick=function numeros(){	
	introducido=9;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("por").addEventListener("mousedown", mouseDownpor);
document.getElementById("por").addEventListener("mouseup", mouseUppor);
//Función para el signo Multiplicar
document.getElementById('por').onclick=function numeros(){	
	introducido="*";	
	numOculto=numeroEnPantalla;
	Operador=introducido;
	numeroEnPantalla1=1;
	pantalla.style.display="none";
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("4").addEventListener("mousedown", mouseDown4);
document.getElementById("4").addEventListener("mouseup", mouseUp4);
//Funcion para agregar el numero 4
document.getElementById('4').onclick=function numeros(){	
	introducido=4;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("5").addEventListener("mousedown", mouseDown5);
document.getElementById("5").addEventListener("mouseup", mouseUp5);
//Funcion para agregar el numero 5
document.getElementById('5').onclick=function numeros(){	
	introducido=5;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("6").addEventListener("mousedown", mouseDown6);
document.getElementById("6").addEventListener("mouseup", mouseUp6);
//Funcion para agregar el numero 6
document.getElementById('6').onclick=function numeros(){	
	introducido=6;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("menos").addEventListener("mousedown", mouseDownMenos);
document.getElementById("menos").addEventListener("mouseup", mouseUpMenos);
//Funcion para agregar el signo menos
document.getElementById('menos').onclick=function numeros(){	
	introducido="-";
	numOculto=numeroEnPantalla;
	Operador=introducido;
	numeroEnPantalla1=1;
	pantalla.style.display="none";
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("1").addEventListener("mousedown", mouseDown1);
document.getElementById("1").addEventListener("mouseup", mouseUp1);
//Funcion para agregar el numero 1
document.getElementById('1').onclick=function numeros(){	
	introducido=1;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("2").addEventListener("mousedown", mouseDown2);
document.getElementById("2").addEventListener("mouseup", mouseUp2);
//Funcion para agregar el numero 2
document.getElementById('2').onclick=function numeros(){	
	introducido=2;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("3").addEventListener("mousedown", mouseDown3);
document.getElementById("3").addEventListener("mouseup", mouseUp3);
//Funcion para agregar el numero 3
document.getElementById('3').onclick=function numeros(){	
	introducido=3;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("mas").addEventListener("mousedown", mouseDownMas);
document.getElementById("mas").addEventListener("mouseup", mouseUpMas);
//Funcion para agregar el signo más
document.getElementById('mas').onclick=function numeros(){	
	introducido="+";
	numOculto=numeroEnPantalla;
	Operador=introducido;
	numeroEnPantalla1=1;
	pantalla.style.display="none";
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("0").addEventListener("mousedown", mouseDown0);
document.getElementById("0").addEventListener("mouseup", mouseUp0);
//Funcion para agregar el numero 0
document.getElementById('0').onclick=function numeros(){	
	introducido=0;
	pantalla.style.display="block";
	if(pantalla.textContent.length<="7"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("dividido").addEventListener("mousedown", mouseDownDiv);
document.getElementById("dividido").addEventListener("mouseup", mouseUpDiv);
//Funcion para agregar el signo de división
document.getElementById('dividido').onclick=function numeros(){	
	introducido="/";
	numOculto=numeroEnPantalla;
	Operador=introducido;
	numeroEnPantalla1=1;
	pantalla.style.display="none";
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("punto").addEventListener("mousedown", mouseDownpunto);
document.getElementById("punto").addEventListener("mouseup", mouseUppunto);
//Funcion para agregar el punto
document.getElementById('punto').onclick=function numeros(){	
	introducido=".";
	pantalla.style.display="block";
	if(pantalla.textContent.length<="1"){
		if (numeroEnPantalla=="0" || numeroEnPantalla1==1){
			pantalla.innerHTML=introducido;
			numeroEnPantalla=introducido;
		}else{
			pantalla.innerHTML+=introducido;
			numeroEnPantalla+=introducido;
		}
	numeroEnPantalla1=0;	
	}	
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("igual").addEventListener("mousedown", mouseDownIgual);
document.getElementById("igual").addEventListener("mouseup", mouseUpIgual);
//Funcion para agregar el resultado
document.getElementById('igual').onclick=function result(resultado){
	if(Operador=="no"){
		pantalla.innerHTML=numeroEnPantalla;
	}else{ 
		solucion=numOculto+Operador+numeroEnPantalla;
		resultado=eval(solucion);
		pantalla.innerHTML=resultado;
		numeroEnPantalla=resultado;
		Operador="no";
		numeroEnPantalla1=1;
			if(resultado % 1==0){
				pantalla.innerHTML=resultado;
			}else{
				pantalla.innerHTML=resultado.toFixed(7);				
		}
	}
};
//Llamar a la funciones para mostrar efecto de tecla
document.getElementById("sign").addEventListener("mousedown", mouseDownsign);
document.getElementById("sign").addEventListener("mouseup", mouseUpsing);
//Funcion para agregar el signo menos antes del numero
document.getElementById('sign').onclick=function opuesto(){	
	numInv=Number(pantalla.textContent);
	numInv=-numInv;
	pantalla.textContent=String(numInv);
	pantalla.innerHTML=pantalla.textContent;	
};
//

//funcion para efecto de precionado de tecla
function mouseDown1(){
	document.getElementById("1").setAttribute("style","transform:scale(0.95,0.95)");
	
	};
//función de efecto de soltado de tecla
function mouseUp1(){
	document.getElementById("1").setAttribute("style","transform:scale(1,1)");
	
};
function mouseDown2(){
	document.getElementById("2").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp2(){
	
	document.getElementById("2").setAttribute("style","transform:scale(1,1)");
};
function mouseDown3(){
	document.getElementById("3").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp3(){	
	document.getElementById("3").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown4(){
	document.getElementById("4").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp4(){	
	document.getElementById("4").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown5(){
	document.getElementById("5").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp5(){	
	document.getElementById("5").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown6(){
	document.getElementById("6").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp6(){	
	document.getElementById("6").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown7(){
	document.getElementById("7").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp7(){	
	document.getElementById("7").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown8(){
	document.getElementById("8").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp8(){	
	document.getElementById("8").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown9(){
	document.getElementById("9").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp9(){	
	document.getElementById("9").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDown0(){
	document.getElementById("0").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUp0(){	
	document.getElementById("0").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDownpor(){
	document.getElementById("por").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUppor(){	
	document.getElementById("por").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDownpunto(){
	document.getElementById("punto").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUppunto(){	
	document.getElementById("punto").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDownsign(){
	document.getElementById("sign").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUpsing(){	
	document.getElementById("sign").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDownDiv(){
	document.getElementById("dividido").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUpDiv(){	
	document.getElementById("dividido").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDownMenos(){
	document.getElementById("menos").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUpMenos(){	
	document.getElementById("menos").setAttribute("style","transform:scale(1,1)");
};
//funcion efecto tecla
function mouseDownMas(){
	document.getElementById("mas").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUpMas(){	
	document.getElementById("mas").setAttribute("style","transform:scale(1,1)");
};
function mouseDownIgual(){
	document.getElementById("igual").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUpIgual(){	
	document.getElementById("igual").setAttribute("style","transform:scale(1,1)");
};
function mouseDownOn(){
	document.getElementById("on").setAttribute("style","transform:scale(0.95,0.95)");
};
//función de efecto de soltado de tecla
function mouseUpOn(){	
	document.getElementById("on").setAttribute("style","transform:scale(1,1)");
};








