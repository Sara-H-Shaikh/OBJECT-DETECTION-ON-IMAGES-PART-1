img="";

function preload()
{
  img = loadImage('bedroom.jpg');
}

function setup()
{
  canvas = createCanvas(600, 500);
  canvas.center();
}

function draw()
{
  image(img, 0, 0, 600, 500);
  fill("#FF0000");
  text("BED", 70, 60);
  noFill();
  strokeWeight(2);
  stroke("#FF0000");
  rect(70, 40, 250, 450);
}
