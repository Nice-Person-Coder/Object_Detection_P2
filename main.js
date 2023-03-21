img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('#065535');
    text('Dog', 45, 75);
    noFill();
    stroke('#065535');
    rect(30, 60, 450, 350);

    fill("#065535");
    text('Cat', 320, 120);
    noFill();
    stroke("#065535");
    rect(300, 90, 270, 320);
}