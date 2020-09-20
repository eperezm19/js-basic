var estudiantes = ["Erick", "Juan", "Emilio"];

while(estudiantes.length > 0){
  var estudiante = estudiantes.shift();
  saludarEstudiante(estudiante);
}

function saludarEstudiante(estudiante){
  console.log(`Hola ${estudiante}`)
}