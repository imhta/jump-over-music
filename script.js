let balloon;
let obs = [];
let ui;
let fft;
let sound;
function preload() {
  sound = loadSound("assets/whistle-song.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth-100, windowHeight-100);
  cnv.mouseClicked(togglePlay);
  balloon = new Balloon();
  obs.push(new Obs());
  fft = new p5.FFT(0.8, 64);
  sound.amp(0.2);
  sound.loop();
}

function draw() {
  background(255);
  var spectrum = fft.analyze();

  noStroke();
  fill('rgb(87,59,12)');

  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect((x *= 2), height, 40, h);
  }

  balloon.show();
  keyHold();
  text('Click to play/pause', 19, 19);
}
function keyHold() {
  if (keyIsDown(UP_ARROW)) {
    balloon.up();
  } if (keyIsDown(DOWN_ARROW)) {
    balloon.down();
  }
  if (keyIsDown(LEFT_ARROW)) {
    balloon.left();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    balloon.right();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
    noLoop();
  } else {
    sound.loop();
    loop();
  }
}