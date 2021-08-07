const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
   
await fetch({"abbreviation":"IST","client_ip":"49.204.187.16",
"datetime":"2021-08-08T01:15:42.563443+05:30","day_of_week":0,
"day_of_year":220,"dst":false,"dst_from":null,"dst_offset":0,
"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata",
"unixtime":1628365542,"utc_datetime":"2021-08-07T19:45:42.563443+00:00",
"utc_offset":"+05:30","week_number":31})

 
    //change the data in JSON format and store it in variable responseJSON

    var responseJSON = await response.json()
    var datetime = responseJSON.datetime;
    

    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;
  
    

    // slice the datetime to extract hour

    
var hour = datetime.slice(11,13);

    
}






