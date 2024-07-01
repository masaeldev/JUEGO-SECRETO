//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Juego de numero Secreto";

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Indica un numero del 1 al 10"

let listanumeroGenerados = [];

let numerorandom = generarNumeroSecreto();

let intento = 1;

function intentoDeUsuario(){
    let numeroIngresado = parseInt(document.getElementById('NumeroIngre').value);
    console.log(numerorandom);
    if(numerorandom == numeroIngresado){
        asignarTextoResultado(`ACERTASTE el numero en ${intento} ${(intento === 1) ? 'vez' : 'veces'}`);
        document.getElementById("intento").disabled = true;
    }else {
        //El usuario no acerto
        if (numeroIngresado<numerorandom){
            asignarTextoResultado("El numero ingresado es menor");
        }else{
            asignarTextoResultado("El numero ingresado es mayor");
        }
        intento++;
    }
    limpiarCaja();
    document.getElementById("reiniciar").disabled = false;
}

function nuevojuego(){
    let valorCaja = document.querySelector('#NumeroIngre');
    valorCaja.value="";
    asignarTextoResultado("");
    document.getElementById("reiniciar").disabled = true;
    intento=0;
    numerorandom = generarNumeroSecreto();
    document.getElementById("intento").disabled = false;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#NumeroIngre');
    valorCaja.value="";
}

function generarNumeroSecreto(){
    let numeroGenerado = parseInt(Math.floor(Math.random()*10)+1);
    console.log(listanumeroGenerados)
    if(listanumeroGenerados.includes(numeroGenerado)){
        generarNumeroSecreto();
    }else{
        listanumeroGenerados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function asignarTextoResultado(texto){
    elementoHtml = document.getElementById('Resultado');
    elementoHtml.innerHTML = texto;
}
