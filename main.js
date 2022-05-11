function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	gameOver = loadSound("gameOver.wav");
	marioDie = loadSound("mariodie.wav");
	Getcoin = loadSound("coin.wav");
	kick = loadSound("kick.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	posenet = ml5.poseNet(video,modelloaded);
	posenet.on("pose",gotposes);
}
function modelloaded() {
	console.log("Model is loaded!")
}

function gotposes(result) 
{
	if(result.length > 0)
	{
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;

		console.log(result);
	}
}

function draw() {
	game();
}






