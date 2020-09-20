// piedra papel o tijera
var opt1 = "Piedra";
var opt2 = "Papel";
var opt3 = "Tijera";

var resultado = function(user, cpu){
  if(user != cpu){
    if(user === opt1 && cpu === opt3){
      console.log("el usuario gano " + opt1);
    }
    else if(user === opt2 && cpu === opt1){
      console.log("el usuario gano " + opt2);
    }
    else if(user === opt3 && cpu === opt2){
      console.log("el usuario gano " + opt3);
    }
    else{
      console.log("gano la consola!!");
    }
  }else {
    console.log("Empate!!");
  }
}