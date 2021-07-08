var dog,sadDog,happyDog,database;
var feedTime,lastFed;

var foodObj;
var feed, addfood;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {

  database=firebase.database();
  createCanvas(1000,400);
    
foodObj = new Food ()

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;


    fedTime =database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed =data.val();
  });

  feed = createButton("FEED DRAGO")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)


    

 
}

function draw() {
  background(46,139,87);

   foodObj.display()

   fill(255,255,254);
   textSize(15);
   if(lastFed>=12){
     text("Last Feed:"+lastFed%12 + "PM", 350,30);
   }else if (lastFed ==0){
     text ("Last Feed : 12 AM " ,350,30 );
   }else{
     text ("LastFeed :"  + lastFed + "AM",350,30)
   }




  drawSprites();
}

//function to update food Stock
function feedDog(){
  dog.addImage(happyDog);
  
  if(foodObj.getFoodStock()<=0){
   foodObj.updateFoodStock(foodObj.getFoodStock()*0);
     }else{
       foodObj.updateFoodStock(foodObj.getFoodStock()-1)
     }
  }

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
   Food:foodObj.getFoodStock(),
   FeedTime: hour ()

  })

//function to add food in stock
 function addFoods(){
   foodS++;
   database.ref('/').update({
     food:foodS
   })
  }
}