let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [45, 100, 155, 213, 268, 323]
let vCarros = [2, 2.5, 3, 2.6, 3.2, 2.3]
let cCarro = 65;
let hCarro = 30;
function showCarro(){
  for (let i = 0; i < carros.length; i++){
    image(carros[i],xCarros[i],yCarros[i],cCarro,hCarro);
  }
}

function movCarro(){
  for (let i = 0; i < vCarros.length; i++){
    xCarros[i] -= vCarros[i];
  }
}

function fim(){
  for (let i = 0; i < vCarros.length; i++){
  if (xCarros[i] < -50){
    xCarros[i] = 600;
  }
  }
}