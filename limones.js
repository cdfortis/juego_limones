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
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=0;


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
  ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

// FUNCION MOVER IZQUIERDA

function moverIzquierda(){
  personajeX=personajeX-10;
  actualizarPantalla();
  detectarColision();
}


// FUNCION MOVER DERECHA 

function moverDerecha(){
personajeX=personajeX+10;
actualizarPantalla();
detectarColision();
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

// FUNCION DETECTAR ATRAPADO

function detectarColision(){

if(limonX+ANCHO_LIMON>personajeX && 
    limonX < personajeX+ANCHO_PERSONAJE &&
    limonY+ALTURA_LIMON>personajeY &&
    limonY < personajeY+ALTURA_PERSONAJE
)
    alert("ATRAPADO!!");

}



