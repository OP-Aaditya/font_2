function setup(){
    video = createCapture(VIDEO);
    video.size(560,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    background('#502552');

}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(){
    if(results.lenght > 0){
        console.log(results);
    }
}
