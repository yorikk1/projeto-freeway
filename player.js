let yPlayer = 366
let xPlayer = 100
let bateu = false
let pontos = 0

function showPlayer (){
  image (player,xPlayer,yPlayer,40,35);
}
function movPlayer(){
  if (keyIsDown(87)){
    yPlayer -= 3;
  }
  if (keyIsDown(83)){
    if (limiteMov())
    yPlayer += 3;
    }
  }


function bater(){
  for (let i = 0; i < carros.length; i++){
    bateu = collideRectCircle(xCarros[i], yCarros[i], cCarro, hCarro, xPlayer, yPlayer, 0)
    if (bateu){
      quandoBate();
      pontos = 0;
    }
  }
}
function quandoBate(){
  yPlayer = 360;
  bateuSom.play();
}
function showPontos(){
  fill (255,0,255)
  textAlign (CENTER)
  textSize (25)
  text (pontos, 150, 26)
}
function pontuar(){
  if (yPlayer < 15){
    pontos += 1;
    quandoBate();
    pontoSom.play();
  }
}
function limiteMov(){
  return yPlayer < 366;
}