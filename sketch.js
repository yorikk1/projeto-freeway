function setup() {
  createCanvas(500, 400);
  fundoSom.loop();
}

function draw() {
  background(fundo);
  showPlayer();
  movPlayer();
  showCarro();
  movCarro();
  fim();
  bater();
  showPontos();
  pontuar();
  limiteMov()
}