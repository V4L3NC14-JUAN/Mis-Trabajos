function Estudiante(nombre,edad,curso){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
}
Estudiante.prototype.agregarInfo = function(){
    return `${this.nombre} , ${this.edad} años, ${this.curso}`;
}
function agregarEstudiante(){
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    curso = document.getElementById("curso").value;

    const nuevoEstudiante = new Estudiante(nombre,edad,curso);

    const lista = document.getElementById("lista");
    const perfil = document.createElement("li");
    perfil.textContent = nuevoEstudiante.agregarInfo();
    lista.appendChild(perfil);
}