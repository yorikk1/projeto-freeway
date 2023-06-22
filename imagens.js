let carro1;
let carro2;
let carro3;
let carros;
let fundo;
let player;
let fundoSom;
let pontoSom;
let bateuSom;

function preload(){
  player = loadImage ("imagens/player.png");
  carro1 = loadImage ("imagens/carro-1.png");
  carro2 = loadImage ("imagens/carro-2.png");
  carro3 = loadImage ("imagens/carro-3.png");
  carros = [carro1, carro2, carro3, carro1, carro2, carro3];
  fundo = loadImage ("imagens/estrada.png");
  fundoSom = loadSound ("sons/trilha.mp3");
  pontoSom = loadSound ("sons/pontos.wav");
  bateuSom = loadSound ("sons/colidiu.mp3");
}
