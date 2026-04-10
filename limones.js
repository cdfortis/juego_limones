let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

// CONSTANTE PARA MANTENER FIJO ALGO
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
// CONSTANTES LIMON
 const ALTURA_LIMON=20;
 const ANCHO_LIMON=20;
// VARIABLES 


let personajeX=canvas.width/2;
let limonX=canvas.width/2;
let limonY=5;


// FUNCION INICIAR
function iniciar(){
dibujarSuelo();
dibujarPersonaje();
dibujarLimon();
}

//FUNCION DIBUJARSUELO

function dibujarSuelo(){
  ctx.fillStyle="red";
  ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

// FUNCION DIBUJARPERSONAJE 

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
  ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),40,ALTURA_PERSONAJE);
}

// FUNCION MOVER IZQUIERDA

function moverIzquierda(){
  personajeX=personajeX-10;
  actualizarPantalla();
}


// FUNCION MOVER DERECHA 

function moverDerecha(){
personajeX=personajeX+10;
actualizarPantalla();
}


// ACTUALIZAR PANTALLA

function actualizarPantalla(){

limpiarCanvas();
  dibujarSuelo();
  dibujarPersonaje();
  dibujarLimon();

}

// FUNCION LIMPIAR CANVAS
function limpiarCanvas(){

ctx.clearRect(0,0,canvas.width,canvas.height);

}

// FUNCION PINTAR LIMON

function dibujarLimon(){

ctx.fillStyle="green";
  ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);

}

// FUNCION BAJAR LIMON

function bajarLimon(){
    limonY=limonY+10;
    dibujarLimon();
    actualizarPantalla();
    
}



