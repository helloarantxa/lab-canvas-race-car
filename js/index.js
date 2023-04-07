const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



const road = new Image()
road.src = '../images/road.png'




let obstacles = [];

class Obstacle {
  constructor (){
    this.x = Math.random() * 480
    this.y = 0;
    this.width = 100 + 100 * Math.random();
    this.height = 20;
  }

  updatePosition() {
    console.log("updating y")
    this.y += 3
  }

  draw() {
    ctx.fillStyle = "brown"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}



class Car {
  constructor() {
    this.x = 200;
    this.y = 600;
 
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = '../images/car.png';
  }
  
  moveLeft() {
    console.log("Moving left")
    if (this.x > 20){
    this.x -= 25;
    }
  }
  moveRight() {
    console.log("Moving right")
    if (this.x < 430){
    this.x += 25;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 80);
  }
}

const car = new Car();

function generateObstacles() {
  setInterval(() => {
    obstacles.push(new Obstacle())
    console.log("New obstacle")
  }, 2000)
}

function startGame() {
animate()
    ctx.drawImage(road, 0,0,500,700);
    
    console.log('Starting...')
    generateObstacles()
  }

function animate (){
    ctx.clearRect(0,0,500,700)
    ctx.drawImage(road, 0,0,500,700);
    console.log("hello")
    car.draw()
    obstacles.forEach((obstacle) => {
      obstacle.updatePosition()
      obstacle.draw()
    })
    requestAnimationFrame(animate)
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

};


 
document.addEventListener('keydown', e => {
  switch (e.keyCode) {

    case 37:
      car.moveLeft();
      console.log('left');
      break;
    case 39:
      car.moveRight();
      console.log('right');
      break;
  }
  updateCanvas();
});

function updateCanvas(){

  ctx.clearRect(0,0,500,700);
  
  console.log("This is car", car)

  
}

