 {HTMLCanvasElement} 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 300;
CANVAS_HEIGTH = canvas.heigth= 500;

enemy1={
  x: 0,
  y: 0,
  width: 100,
  height: 100,
}

function animate(){
  ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.heigth);
}

