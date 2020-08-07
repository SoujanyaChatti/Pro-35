//Create variables here
database=firebase.database();
var doggy,database,fedtime,lastfed,feedb,addfoodb,foodObj,foodS,image1,image2;
function preload()
{
  image1=loadImage("images/Dog.png");
  image2=loadImage("images/happydog.png");
  
	//load images here
}

function setup() {
  createCanvas(800, 500);
  
  database=firebase.database();
  doggy=createSprite(600,200);
  doggy.addImage(image1);
  doggy.scale=0.2;
  foodObj=new Food();
  
  fedtime=database.ref('FeedTime');
  fedtime.on("value",function(data){
    lastfed=data.val();
  })
  feedb=createButton("Feed the dog");
  feedb.position(400,50);
  feedb.mousePressed(feedDog)
  
  addfoodb=createButton("add food");
  addfoodb.position(500,50);
  addfoodb.mousePressed(addFoods);

  var dogf=database.ref('Food');
  dogf.on("value",readF);
}



function draw() {  
background(46,139,87);



foodObj.display();
drawSprites();
fill("white");
textSize(20);
if(lastfed>=12){
  text("last fed:"+ lastfed%12 +"PM",500,30);
}
else if(lastfed==0){
  text("last fed:12 AM",350,30);
}
else{
  text("last fed:"+lastfed+" AM",350,30);
}



}

function readF(data){
  foodS=data.val();
  foodObj.updatefoodstock(foodS);
}

function feedDog(){
  doggy.addImage(image2);
 
  foodObj.updatefoodstock(foodObj.getfoodstock()-1);
  database.ref('/').set({
    Food:foodObj.getfoodstock(),
    FeedTime: hour ()
  })
}
function addFoods(){

  database.ref('/').set({
    Food:foodS
  })
  foodS++
}