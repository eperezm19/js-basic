var miAuto = {
  marca: "Toyota",
  modelo: "Corola",
  annio: "2020"
}

// acceder a las propiedades del objeto
// miAuto.annio -> 2020

// metodo de objeto
var miAuto = {
  marca: "Toyota",
  modelo: "Corola",
  annio: "2020",
  detalle: function(){
    console.log(`Modelo ${this.modelo} ${this.annio}`);
  }
}

// objetos funcion constructora
function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
// funcion para obtener listado de autos
function getAutos(){

  var autos = [];

  for(let i = 0; i < 30; i++){
    var marca = "Toyota";
    var modelo = "Corola";
    var annio=  "2020";
    autos.push(new auto(marca + i, modelo + i, annio + i));
  }

  for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
  }

}