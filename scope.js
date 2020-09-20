// Existen dos tipos scope global, scope local

// scope global
var nombre = "Diego";

function miNombre(){
  // scope local
  var apellido = "Granda";
  console.log(nombre + apellido);
}