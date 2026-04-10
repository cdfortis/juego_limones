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
let puntaje=0;
let vidas=3;
let velocidadCaida=200;


// FUNCION INICIAR
function iniciar(){
setInterval(bajarLimon,velocidadCaida); // PRIMER PARAMETRO: UNA FUNCION COMO TAL Y EL SEGUNDO PARAMETRO RECIBE EL TIEMPO EN MILISEGUNDOS   
dibujarSuelo();
dibujarPersonaje();
dibujarLimon();
aparecerLimon();
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
    detectarAtrapado();
    detectarPiso();
    
}

// FUNCION DETECTAR ATRAPADO

function detectarAtrapado() {
    if (limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE
    ) { // <-- Abrir llave
        puntaje = puntaje + 1;
        mostrarEnSpan("txtPuntaje", puntaje);
        aparecerLimon(); // El limón vuelve arriba
    } // <-- Cerrar llave
}

// FUNCION APARECER LIMON
 
function aparecerLimon(){
    // 1. Elegimos una posición horizontal (X) al azar
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    
    // 2. Ponemos la posición vertical (Y) en 0 para que empiece arriba
    limonY = 0; 
    
    actualizarPantalla();
}

/// FUNCION DETECTAR PISO

function detectarPiso(){
    if(limonY + ALTURA_LIMON >= canvas.height - ALTURA_SUELO){
        vidas = vidas - 1;
        mostrarEnSpan("txtVidas", vidas);
        aparecerLimon(); 
    }
}