//Create variables here
var dog,happyDog;
var database;
var foodS,foodstock;
function preload()
{
  //load images here
  DogImg = loadImage("images/dogImg.png");
  DoghappyImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(200 ,200 , 50 , 50);
  dog.addImage(DogImg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  dog.feed;
  foodStock = foodStock-1;
}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(doghappyImg);
}
  drawSprites();
  //add styles here
textSize(3);
fill("red");
stroke("red");
}
//function to read values from DB.
function readStock(data){
  foodS = data.val();
}
//function to write values in DB
function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x = x-1;
  }
  database.ref('/').update({

  })
}
