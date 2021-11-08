const start=document.getElementById("start");
const game=document.querySelector(".game");

let ramdomNumber =Math.floor (Math.random() *100);
let submit=document.getElementById("submit")
let hint=document.getElementById("hint")
let prevGuessLabel=document.getElementById("prevGuessLabel")
let anterioressupo=document.getElementById("anterioressupo")
let restart=document.getElementById("restar")
let contador=0

start.addEventListener('click',iniciarjuego);

function iniciarjuego(){
    game.style.display='block'
    start.style.display='none'
}
submit.addEventListener('click',validation);
function validation(){
    let playerGuess=parseInt(document.getElementById("guess").value
    contador++;

    if (playerGuess===""){
        hint.textContent="por favor ingresar un numero valido"
    }
    else if (playerGuess=== randomNumber){
        hint.textContent="Ganaste!!!"
    }
    else if(playerGuess> randomNumber){
        hint.textContent="es numero ingresado es mayor que la respuesta"
    
    }
    else if(playerGues < randomNumber){
        hint.textContent="el numero ingresado es menor que la respuesta"
    }
    anterioressupo.textContent+=playerGuess+' ';
    
    if(contador === 10){
        game.style.display='none'
        restart.style.display='block'
        document.getElementById('gameover').textContent="Perdiste el juego"
   }
    
    
}

function reload(){
    history.go(0);
})
