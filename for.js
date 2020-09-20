var estudiantes = ["Erick", "Juan", "Emilio"];

// for(let i = 0; i < estudiantes.length; i++){
//   saludarEstudiante(estudiantes[i]);
// }

for (const estudiante of estudiantes) {
  saludarEstudiante(estudiante);
}

function saludarEstudiante(estudiante){
  console.log(`Hola ${estudiante}`);
}