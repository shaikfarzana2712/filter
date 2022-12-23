noseX=0; noseY=0;
function preload() {
clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
    function gotPoses(result) {
        console.log(result);
        console.log("nosex=" + result[0].pose.nose.x)
        console.log("nosey=" + result[0].pose.nose.y)
noseX = result[0].pose.nose.x-15; noseY = result[0].pose.nose.y+10;
    }

    function draw() {
        image(video, 0, 0, 300, 300);
    image(clown_nose,noseX,noseY,30,30)
}

    function take_snapshot() {
        save('myFilterImage.png')
    }

    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }
    
