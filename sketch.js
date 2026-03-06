// P = position change from 0 to 1
let p = 0;
let angle = 0;
let musicStarted = false;

const bgm = new Audio("./music.mp3");
bgm.loop = true;
bgm.preload = "auto";

const musicBtn = document.getElementById("playMusicBtn");
const musicStatus = document.getElementById("musicStatus");

function setMusicStatus(text) {
  if (musicStatus) {
    musicStatus.textContent = text;
  }
}

function tryStartMusic() {
  if (musicStarted) {
    return;
  }

  bgm.play()
    .then(() => {
      musicStarted = true;
      setMusicStatus("Music is playing.");
    })
    .catch(() => {
      setMusicStatus("Click Play Music to start audio.");
    });
}

window.addEventListener("pointerdown", tryStartMusic);
window.addEventListener("keydown", tryStartMusic);

if (musicBtn) {
  musicBtn.addEventListener("click", tryStartMusic);
}

function setup() {
  createCanvas(900, 900).parent("visual");
  background(200);
  tryStartMusic();
}

function draw() {
  background(10, 90);
  translate(width / 2, height / 2);
  noFill();
  strokeWeight(3);
  angleMode(DEGREES);

  //A
  rotate(angle);
  triangle(0, -300, 300, 300, -300, 300);
  edgePoints(0, -300, 300, 300, -300, 300);
  //B
  rotate(angle + 3);
  triangle(-300, -300, 300, -300, 0, 300);
  edgePoints(-300, -300, 300, -300, 0, 300);

  //A0.5
  rotate(angle + 6);
  triangle(0, -275, 275, 275, -275, 275);
  edgePoints(0, -275, 275, 275, -275, 275);
  //B0.5
  rotate(angle + 9);
  triangle(-275, -275, 275, -275, 0, 275);
  edgePoints(-275, -275, 275, -275, 0, 275);

  //A1
  rotate(angle + 12);
  triangle(0, -250, 250, 250, -250, 250);
  edgePoints(0, -250, 250, 250, -250, 250);
  //B1
  rotate(angle + 15);
  triangle(-250, -250, 250, -250, 0, 250);
  edgePoints(-250, -250, 250, -250, 0, 250);

  //A1.5
  rotate(angle + 18);
  triangle(0, -225, 225, 225, -225, 225);
  edgePoints(0, -225, 225, 225, -225, 225);
  //B1.5
  rotate(angle + 21);
  triangle(-225, -225, 225, -225, 0, 225);
  edgePoints(-225, -225, 225, -225, 0, 225);

  //A2
  rotate(angle + 24);
  triangle(0, -200, 200, 200, -200, 200);
  edgePoints(0, -200, 200, 200, -200, 200);
  //B2
  rotate(angle + 27);
  triangle(-200, -200, 200, -200, 0, 200);
  edgePoints(-200, -200, 200, -200, 0, 200);

  //A3
  rotate(angle + 30);
  triangle(0, -150, 150, 150, -150, 150);
  edgePoints(0, -150, 150, 150, -150, 150);
  //B3
  rotate(angle + 33);
  triangle(-150, -150, 150, -150, 0, 150);
  edgePoints(-150, -150, 150, -150, 0, 150);

  //A4
  rotate(angle + 36);
  triangle(0, -100, 100, 100, -100, 100);
  edgePoints(0, -100, 100, 100, -100, 100);
  //B4
  rotate(angle + 39);
  triangle(-100, -100, 100, -100, 0, 100);
  edgePoints(-100, -100, 100, -100, 0, 100);

  //A5
  rotate(angle + 42);
  triangle(0, -50, 50, 50, -50, 50);
  edgePoints(0, -50, 50, 50, -50, 50);
  //B5
  rotate(angle + 45);
  triangle(-50, -50, 50, -50, 0, 50);
  edgePoints(-50, -50, 50, -50, 0, 50);

  //A6
  rotate(angle + 48);
  triangle(0, -25, 25, 25, -25, 25);
  edgePoints(0, -25, 25, 25, -25, 25);
  //B6
  rotate(angle + 51);
  triangle(-25, -25, 25, -25, 0, 25);
  edgePoints(-25, -25, 25, -25, 0, 25);

  angle += 0.3;
}

function edgePoints(x1, y1, x2, y2, x3, y3) {
  const px1 = lerp(x1, x2, p);
  const py1 = lerp(y1, y2, p);

  const px2 = lerp(x2, x3, p);
  const py2 = lerp(y2, y3, p);

  const px3 = lerp(x3, x1, p);
  const py3 = lerp(y3, y1, p);

  fill("red");
  noStroke();
  ellipse(px1, py1, 6);
  ellipse(px2, py2, 6);
  ellipse(px3, py3, 6);

  noFill();
  stroke(220, 50);

  p += 0.001;

  if (p > 1) {
    p = 0;
  }
}
