noseX="";
noseY="";

function preload()
{clown_nose = loadImage('https://media.istockphoto.com/id/1152878060/vector/mustache-icon-hipster-moustache-stylish-symbol-template-design-for-masquerade-holiday-party.jpg?s=612x612&w=0&k=20&c=JsPt2_Nfpb_PyuP_cALxmpiq5yuZUQyflSi-kqaM_4g=');
}

function setup()
{
    canvas= createCanvas(280,280)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}




function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}


function draw()
{
    image(0,0,280,280)
}

