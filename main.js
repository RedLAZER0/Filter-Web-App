nose_x = 0;
nose_y = 0;


function preload()
{
   clownNose = loadImage('https://i.postimg.cc/rmjZWWQW/nose.png');    
};

function setup()
{
canvas= createCanvas(300, 300);
canvas.center();  
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses); 
}

function draw()
{
image(video, 0, 0, 300, 300) ;
  
image(clownNose, nose_x, nose_y, 30, 30) ;
}

function takeSnapshot()
{
    save("filterdImage.png");
}

function modelLoaded()
{
console.log("Posenet Is Intitialized");    
}

function gotPoses(results)
{
if(results.length > 0 )
{
console.log(results);
nose_x = results[0].pose.nose.x - 15;
nose_y = results[0].pose.nose.y - 15;
console.log("Nose X =" + nose_x);
console.log("Nose Y =" + nose_y);
}    
}