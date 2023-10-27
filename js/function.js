//alert("funtion activo");
// ############ tipo de variable
// const para variables constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10; 
var name = "Duvan Carvajalino";
// let para variables de bloqueo o locales
let count = 1; 

// ############ formas de impresio 
//alert
//alert(name);
//cosole.log
console.log(name);
//body pantalla
document.write(name + "##Duvan Carvajalino");
document.getElementById("box_one").innerHTML = "<h1>Duvan Carvajalino</h1>";
document.getElementById("box_two").innerText = "<h1>Duvan Carvajalino</h1>";
//librerias
//Swal.fire(
//'The Internet?',
//'That thing is still around?',
//'question'
// )

 
//  Swal.fire({
// icon: 'error',
// showConfirmButton: false,
// title: name,
// text: name,
// footer: "footer: " + name,
// background: 'red',
// position: 'top-start'
//  });

// ######################## tipos de datos
// numericos
var number_one = 20;
 var number_two = 5.5;

 //texto 
 var class_type = "Electiva Tecnica 1";
 //booleanos
 var boolean = true; //false;

 //array - vectores
 var array_num = [1, 2, 3, 4, 5, 6, 7];
 var array_text = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
 var array_mix = [1, "a", 2, "b"];
 var array_mul = [

 ]



 //############# operadores basicos
 //suma
 var suma = number_one + number_two;
 console.log("Suma = " + suma);
 //resta
 var resta = number_one - number_two;
 console.log("Resta = " + resta);
 //multiplicacion
 var multiplicacion = number_one * number_two;
 console.log("Multiplicacion = " + multiplicacion);
 //division 
 var division = number_one / number_two;
 console.log("Division = " + division.toFixed(2));
 //modulo
 var modulo = number_one % number_two;
 console.log("Modulo = " + modulo);


 




 