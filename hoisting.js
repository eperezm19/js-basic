// Solo funciona en la version de ESMAC5, sucede cuando se manda a llamar una variable antes de ser declarada
// hoisting js inicializa el valor de las variables con undefined

function miNombre(){
  // En este caso al llamar la variable an tes de declararla js lo signa undefined
  return nombre;
}

var nombre = "Diego";

miApellido();

function miApellido(){
  var apellido = "Granda"
  return apellido;
}
