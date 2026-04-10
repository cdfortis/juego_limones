let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

// CONSTANTE PARA MANTENER FIJO ALGO
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;


// FUNCION INICIAR
function iniciar(){
dibujarSuelo();
dibujarPersonaje();
}

//FUNCION DIBUJARSUELO

function dibujarSuelo(){
  ctx.fillStyle="red";
  ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

// FUNCION DIBUJARPERSONAJE 

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
  ctx.fillRect(canvas.width/2,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),40,ALTURA_PERSONAJE);
}

