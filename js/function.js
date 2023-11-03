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


 // Operadores logicos y estructuras condicionales (inverse, incremento y decremento)
// AND && con if - Ampersand

var bool = false;
var numeric = 10;
if(!bool && numeric === 10){
    console.log("ENTRA IF");
} 
else {
    console.log("ENTRA ELSE");
}
 
if(!bool || numeric == 7){
    console.log("ENTRA IF");
    numeric+=3;
} 
else {
    console.log("ENTRA ELSE");
numeric--;
}
console.log(numeric);

// FOR
for(let  j= 0; j<array_text.length; j++){
    console.log(array_text[j] + (j+1));
}

//WHILE
let f=0;
while(f<array_text.length){
    console.log(array_text[f] + (f+1));
    f++;
}

let i=0;
do{
  console.log(array_text[i] + (i+1));
  i++;
}while (i<array_text.length);

 //FUNCIONES Y EVENTOS
function load_page(){
    //alert("la pagina se ha cargado correctamente")
}


function  change_Color(){
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "#fff"
}

const clear_color = document.querySelector("#clear_color");

clear_color.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
});

//REGISTRO FORMULARIO

const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");  

form_register.addEventListener("submit", name_event => {
       name_event.preventDefault();
       let info = "";
       console.log(nombres.value.length);
       if(nombres.value.length <= 2 || apellidos.value.length <=2){
              info+= "NOMBRES Y/O APELLIDOS INVALIDOS";
              information.style.color = "red";

       }
       else{
          alert(nombres.value + " " + apellidos.value);
       }
       information.innerText = info;
});

