let suma = (a,b) => a+b;
function sumarNumeros(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);    
    alert (suma(a,b));
}

let elevado = (c) => c*c;
function elevar(){
    let c = parseInt(document.getElementById("c").value);
    alert (elevado(c));
}

let verificado = (d) => d%2==0 ? "Par":"Impar";
function verificarPar(){
    let d = parseInt(document.getElementById("d").value);
    alert (verificado(d));
}

let arregloDuplicado = (arreglo1) => arreglo1.map(n => n*2);
function duplicarArreglo(){
    let lista = document.getElementById("arreglo1").value;
    let arreglo1 = lista.split(",");
    alert (arregloDuplicado(arreglo1));
}

let arregloFiltrado = (arreglo2) => arreglo2.filter(n => n%2==0);
function filtrarPares(){
    let lista2 = document.getElementById("arreglo2").value;
    let arreglo2 = lista2.split(",");
    alert (arregloFiltrado(arreglo2));
}

let arregloPromediado = (arreglo3) => arreglo3.reduce((a,b) => a+b,0);
function promediarArreglo() {
    let lista3 = document.getElementById("arreglo3").value;
    let arreglo3 = lista3.split(",");
    console.log(arregloPromediado(arreglo3))
    alert (arregloPromediado(arreglo3));
}

let saludo = (nombre) => "Hola "+nombre+"!!";
function saludarPersona(){
    let nombre = document.getElementById("nombre").value;
    alert (saludo(nombre));
}

let imprimirMensaje = (mensaje) => console.log(mensaje);
function mostrarMensajeConsola(){
    let mensaje = document.getElementById("mensaje").value;
    imprimirMensaje(mensaje);
}