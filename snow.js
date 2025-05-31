const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const maxFlakes = 100;
// SNOWFLAKE CLASS
class Snowflake {
    constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.speed = Math.random() * 2 + 0.5;
    this.wind = Math.random() * 0.5 - 0.25;

}
// SNOWFLAKE CLASS

// UPDATE SNOWFLAKE POSITION 
update() {
    this.y += this.speed;
    this.x += this.wind;

    if  (this.y > canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;

    }

    if (this.x > canvas.width || this.x < 0) {
        this.x = Math.random() * canvas.width;
        this.y = 0;
    }
}
// UPDATE SNOWFLAKE POSITION 


// DRAWING THE SNOWFLAKES 
draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

}

for (let i = 0; i < maxFlakes; i++) {
    snowflakes.push(new Snowflake());
}
// DRAWING THE SNOWFLAKES 

// ANIMATE SNOWFLAKES 
function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    });

    requestAnimationFrame(animateSnow);
}

animateSnow();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}); 

// ANIMATE SNOWFLAKES 
