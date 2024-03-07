//declaro n°secreto y llamo ala funcion
// numeroSecreto es una variable global
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;  
}
/* 
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del 😎 nùmero secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indique un número del 1 al 10';
--creando una funcion generica para colocar texto aun elemento*/

function verificarIntento() {
    //el getElementById es un idetificador por id
    let valorDeUsuario = parseInt(document.getElementById('numeroDeUsuario').value);

    /*console.log(typeof(valorDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(valorDeUsuario);*/
     //comparacion de tipo de datos y el numero si el numer = numer y 5= 5
    //console.log(numeroSecreto)
    if(valorDeUsuario===numeroSecreto){
            asignarTextoElemento('p',`Acertaste el nùmero secreto en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
            document.getElementById ('reiniciar').removeAttribute('disabled');
    }else {if (valorDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El N° Secreto es menor');
            }else{
                asignarTextoElemento('p','El N° Secreto es mayor');
            }
            limpiarCaja();
            intentos++;
          
    }
    return;
}

function limpiarCaja(){
//es igual un identificador por id
 document.querySelector('#numeroDeUsuario').value ='';
}
    
// funcion para tener el número aleatorio
function generarNuSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados); 
    //verificar si esta em la lista el numerogenerado; include verifica si ya existe devolciendo un booleano
    //preguntamos si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNuSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    //colocando los elementos 
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Indicar un numero del 1 al ${numeroMaximo}`);
    //generar el numero aleatorio de nuevo 
    numeroSecreto = generarNuSecreto();
    //inicializar el numero de intentos 
    intentos= 1;
    }
function reiniciarJuego() {
    //limpiar la caja o el tex box 
    limpiarCaja();
    //indicamos el mesaje de nuevo
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
       
}
condicionesIniciales();
