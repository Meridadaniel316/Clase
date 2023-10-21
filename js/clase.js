let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let mensajeAlto = "Demasiado alto";
let mensajeBajo = "Demasiado bajo";
let mensajeAcertado = "¡Has acertado!";
var numeroAdivinar;

const mensajePantalla = function (mensaje) {
    document.querySelector('.mensaje').textContent = mensaje;
};
const mensajeNumero = function (mensaje) {
    document.querySelector('#number').textContent = mensaje;
};

const validacionesNumero = function() {
    numeroAdivinar = Number(document.querySelector('.guess').value);
    mensajeNumero(numeroSecreto)
    if (numeroSecreto > numeroAdivinar){
        mensajePantalla(mensajeBajo);
    }else if (numeroSecreto < numeroAdivinar){
        mensajePantalla(mensajeAlto);
    }else if (numeroSecreto == numeroAdivinar){
        mensajePantalla(mensajeAcertado);
        mensajeNumero(numeroSecreto)
    }
}

document.querySelector('.check').addEventListener('click', function () {
    validacionesNumero();
})

document.querySelector('.again').addEventListener('click', function (){
    numeroSecreto = Math.trunc(Math.random() * 20) + 1;
    mensajePantalla('Empieza a adivinar...');
    mensajeNumero("?")
    document.querySelector('.guess').value = '';
})

document.querySelector('.checkName').addEventListener('click', function (){
    const nombre = document.querySelector('#nombre').value;
    document.querySelector('.nombretexto').textContent = "Hola "+nombre;
})