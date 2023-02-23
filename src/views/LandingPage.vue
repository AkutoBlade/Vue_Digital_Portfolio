<template>
  <div id="LandingBack" class="bgColor">
    <audio id="gravityfalls">
      <source src="../gravity_falls.mp3" type="audio/mpeg">
    </audio>
    <div class="github">
      <div class="game">
        <canvas id="game"></canvas>
      </div>
    </div>
    <div class="info">
      <div class="inst_box">
        <div class="content">
          <h1 class="controls">Controls</h1>
          <img
            class="keys"
            src="https://i.postimg.cc/wxf1XzxK/Screenshot-1.png"
            alt=""
          />
          <div class="row">
            <div class="col">
              <h2 class="control_title">Game's Controls</h2>
              <ul>
                <li> ArrowUp - Allows the square to jump</li>
                <li> ArrowDown - Allows the square to duck</li>
              </ul>
            </div>
            <div class="col">
              <h2 class="control_title">Shortcut Keys</h2>
              <ul>
                <li> W - Brings up settings</li>
                <li> S - Brings down the game</li>
                <li> D - Brings the navbar from the left</li>
                <li> A - Brings the help page from the right</li>
                <li> Q - Allows you to download my CV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="waves"></div>
    </div>
    <div class="blobs-container">
      <div class="blob purple one" title="Play a game" @click="handleBox()">
        <i class="fa-solid fa-xmark fa-xmark-1"></i
        ><i class="fa-solid fa-ghost"></i>
      </div>
      <div class="blob purple two" title="Help" @click="handleInfo()">
        <i class="fa-solid fa-circle-question"></i
        ><i class="fa-solid fa-xmark fa-xmark-2"></i>
      </div>
      <div class="blob purple three" title="Settings" @click="playAudio()">
        <i class="fa-solid fa-volume-high"></i>
      </div>
      <div class="blob purple four" title="Download CV" @click="downloadCV()">
        <i class="fa-solid fa-download"></i>
      </div>
    </div>
    <div id="border"></div>
    <diV id="content">
      <h1 class="animate__animated animate__bounceInRight">
        <a
          href=""
          class="typewrite Display-1"
          data-period="2000"
          data-type='[ "Jared Isaacs..", "I am an Aspiring Web-Developer...", "I am an Aspiring App-Developer...", "I am an Aspiring Data Scientist...", "I am a Freelancer."  ]'
        >
          <span class="wrap"></span>
        </a>
      </h1>
      <br />
      <span id="divider"></span>
      <br />
      <div id="Icon" class="animate__animated animate__bounceInUp">
        <a class="space" href="https://github.com/AkutoBlade" target="_blank"
        ><i class="px py-2 fa-brands fa-github"></i
        ></a>
        <a class="space" href="https://www.linkedin.com/in/jared-isaacs-854514245/" target="_blank"
        ><i class="px py-2 fa-brands fa-linkedin"></i
        ></a>
        <a class="space" href="https://codepen.io/akutoblade" target="_blank"
        ><i class="px py-2 fa-brands fa-codepen"></i
        ></a>
        <a class="space" href="https://twitter.com/JaredIsaacs_03" target="_blank"
        ><i class="px py-2 fa-brands fa-twitter"></i
        ></a>
      </div>
    </diV>
  </div>
</template>
<script>
import NavBar from "@/components/Footer.vue";

export default {
  data() {
    return {
      isBox: false,
      isInfo: false,
    };
  },
  mounted() {
   

    window.addEventListener("keydown", this.keyPress);
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    // Variables
    let score;
    let scoreText;
    let highscore;
    let highscoreText;
    let player;
    let gravity;
    let obstacles = [];
    let gameSpeed;
    let keys = {};

    // Event Listeners
    document.addEventListener("keydown", function (evt) {
      keys[evt.code] = true;
    });
    document.addEventListener("keyup", function (evt) {
      keys[evt.code] = false;
    });

    class Player {
      constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dy = 0;
        this.jumpForce = 15;
        this.originalHeight = h;
        this.grounded = false;
        this.jumpTimer = 0;
      }

      Animate() {
        // Jump
        if (keys["ArrowUp"]) {
          this.Jump();
        } else {
          this.jumpTimer = 0;
        }

        if (keys["ArrowDown"]) {
          this.h = this.originalHeight / 2;
        } else {
          this.h = this.originalHeight;
        }

        this.y += this.dy;

        // Gravity
        if (this.y + this.h < canvas.height) {
          this.dy += gravity;
          this.grounded = false;
        } else {
          this.dy = 0;
          this.grounded = true;
          this.y = canvas.height - this.h;
        }

        this.Draw();
      }

      Jump() {
        if (this.grounded && this.jumpTimer == 0) {
          this.jumpTimer = 1;
          this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
          this.jumpTimer++;
          this.dy = -this.jumpForce - this.jumpTimer / 50;
        }
      }

      Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
      }
    }

    class Obstacle {
      constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dx = -gameSpeed;
      }

      Update() {
        this.x += this.dx;
        this.Draw();
        this.dx = -gameSpeed;
      }

      Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
      }
    }

    class Text {
      constructor(t, x, y, a, c, s) {
        this.t = t;
        this.x = x;
        this.y = y;
        this.a = a;
        this.c = c;
        this.s = s;
      }

      Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.font = this.s + "px sans-serif";
        ctx.textAlign = this.a;
        ctx.fillText(this.t, this.x, this.y);
        ctx.closePath();
      }
    }

    // Game Functions
    function SpawnObstacle() {
      let size = RandomIntInRange(20, 70);
      let type = RandomIntInRange(0, 1);
      let obstacle = new Obstacle(
        canvas.width + size,
        canvas.height - size,
        size,
        size,
        "white"
      );

      if (type == 1) {
        obstacle.y -= player.originalHeight - 10;
      }
      obstacles.push(obstacle);
    }

    function RandomIntInRange(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function Start() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.font = "20px sans-serif";

      gameSpeed = 3;
      gravity = 1;

      score = 0;
      highscore = 0;
      if (localStorage.getItem("highscore")) {
        highscore = localStorage.getItem("highscore");
      }

      player = new Player(25, 0, 50, 50, "white");

      scoreText = new Text("Score: " + score, 25, 25, "left", "white", "20");
      highscoreText = new Text(
        "Highscore: " + highscore,
        canvas.width - 25,
        25,
        "right",
        "white",
        "20"
      );

      requestAnimationFrame(Update);
    }

    let initialSpawnTimer = 200;
    let spawnTimer = initialSpawnTimer;
    function Update() {
      requestAnimationFrame(Update);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spawnTimer--;
      if (spawnTimer <= 0) {
        SpawnObstacle();
        console.log(obstacles);
        spawnTimer = initialSpawnTimer - gameSpeed * 8;

        if (spawnTimer < 60) {
          spawnTimer = 60;
        }
      }

      // Spawn Enemies
      for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];

        if (o.x + o.w < 0) {
          obstacles.splice(i, 1);
        }

        if (
          player.x < o.x + o.w &&
          player.x + player.w > o.x &&
          player.y < o.y + o.h &&
          player.y + player.h > o.y
        ) {
          obstacles = [];
          score = 0;
          spawnTimer = initialSpawnTimer;
          gameSpeed = 3;
          window.localStorage.setItem("highscore", highscore);
        }

        o.Update();
      }

      player.Animate();

      score++;
      scoreText.t = "Score: " + score;
      scoreText.Draw();

      if (score > highscore) {
        highscore = score;
        highscoreText.t = "Highscore: " + highscore;
      }

      highscoreText.Draw();

      gameSpeed += 0.003;
    }

    Start();
  },
  methods: {
    handleBox() {
      this.isBox = !this.isBox;
      console.log(this.isBox);
      var backg = document.getElementById("LandingBack");
      if (this.isBox == true) {
        document.querySelector("#social").checked = true;
        document.querySelector(".github").style.transform =
          "translateY(-100vw)";
        document.querySelector(".github").style.transition = "all 0.7s ease";
        document.querySelector(".one").style.backgroundColor =
          "rgba(142, 68, 173, 1)";
        document.querySelector(".one").style.transition = "1s";
        document.querySelector(".one").style.borderRadiius = "20%";
        document.querySelector(".fa-xmark-1").style.display = "none";
        document.querySelector(".fa-ghost").style.display = "block";
        doc
      }
      if (this.isBox == false) {
        document.querySelector("#social").checked = false;
        document.querySelector(".github").style.transform = "translateY(0px)";
        document.querySelector(".one").style.backgroundColor = "white";
        document.querySelector(".fa-xmark-1").style.display = "block";
        document.querySelector(".fa-ghost").style.display = "none";
      }
    },
    handleInfo() {
      this.isInfo = !this.isInfo;
      console.log(this.isInfo);
      var backg = document.getElementById("LandingBack");
      if (this.isInfo == true) {
        document.querySelector("#infoCheck").checked = true;
        document.querySelector(".info").style.transform = "translateX(100vw)";
        document.querySelector(".info").style.transition = "all 0.7s ease";
        document.querySelector(".two").style.backgroundColor =
          "rgba(142, 68, 173, 1)";
        document.querySelector(".two").style.transition = "1s";
        document.querySelector(".two").style.borderRadiius = "20%";
        document.querySelector(".fa-xmark-2").style.display = "none";
        document.querySelector(".fa-circle-question").style.display = "block";
        document.querySelector(".info").style.display = "none";
        

      }
      if (this.isInfo == false) {
        document.querySelector("#infoCheck").checked = false;
        document.querySelector(".info").style.display = "flex";
        document.querySelector(".info").style.transform = "translateX(0px)";
        document.querySelector(".two").style.backgroundColor = "white";
        document.querySelector(".fa-xmark-2").style.display = "block";
        document.querySelector(".fa-circle-question").style.display = "none";
        
        
      }
    },
    keyPress(event) {
      if (event.code === "KeyS") {
        this.handleBox();
        console.log(e);
      } else if (event.code === "KeyA") {
        this.handleInfo();
      } else if (event.code === "KeyQ") {
        this.downloadCV();
      }
    },
    downloadCV() {
      // create a new anchor element
      const link = document.createElement("a");
      // set the href attribute to the URL of your CV file
      link.href = "Jared_Isaacs_CV.pdf";
      // set the download attribute to the desired filename
      link.download = "Jared_Isaacs.pdf";
      // simulate a click event to trigger the download
      link.click();
    },
    playAudio() {
      var audio = document.getElementById("gravityfalls")
      var count = 0
      if(count == 0){
        ++count
        audio.play();
     }else{
       count = 0;
       audio.pause();
  }
}
  },
};
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.spaced {
  overflow-x: hidden;
}

ul>li{
  list-style: none;
}

ul>li::before{
  content: "○";
}
canvas {
  position: relative;
  display: block;
  width: 90%;
  height: 90%;
  background-color: #8000ff ;
  top:5%;
  border-radius: 10px;
}

#LandingBack {
  display: flex;
  justify-content: flex-end;
  background: url("../assets/LandingPage.jpg") no-repeat center center/cover;
  width: 100%;
  height: 100vh;
}

.row{
  width: 100%;
  margin-top: 4%;
}
.inst_box {
  display: flex;
  justify-content: center;
  width: 80vw;
  height: 800px;
  border-radius: 50px;
  background: linear-gradient(white,white,#8000ff,#8000ff);
  overflow-y: hidden;
  z-index: 22;
  position: absolute;
  box-shadow: 0vw 0vw 10px black;
  color: white;
  /* position: absolute;
  top: 2%; */
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1%;
}

.controls{
  color:#8000ff;
  text-shadow: 0vw 0vw 10px #8000ff ;
}

.control_title{
   text-align: center;
   text-shadow: 0vw 0vw 10px white ;

}
.keys {
  width: 60%;
  border-radius: 10px;
}

.fa-solid{
  text-shadow: 0vw 0vw 10px white;
}
@keyframes pulse-box {
  0% {
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
  }
}

.bgColor {
  background: linear-gradient(black, black);
}

.game {
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
}
.github {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#8000ff, white);
  position: absolute;
  transform: translateY(-100vh);
  z-index: 1;
}

.info {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: white;
  transform: translateX(100%);
  overflow: hidden;
  position: absolute;
}

.waves {
  display: flex;
  background: linear-gradient(white, #8000ff);
  animation: animate 4s ease-in-out infinite;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

/* @keyframes animate{

  0%,100%
  {
    clip-path: polygon(0% 45%, 16% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100% );
  }
  50%
  {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100% );
  }
} */

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0 47%,
      8% 36%,
      19% 27%,
      31% 29%,
      42% 45%,
      48% 66%,
      58% 79%,
      76% 79%,
      89% 75%,
      100% 63%,
      100% 100%,
      0 100%
    );
  }
  50% {
    clip-path: polygon(
      0 64%,
      8% 76%,
      19% 80%,
      31% 78%,
      42% 68%,
      48% 46%,
      58% 30%,
      76% 28%,
      89% 37%,
      100% 48%,
      100% 100%,
      0 100%
    );
  }
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  width: 65%;
}

#title {
  color: white;
}

#divider {
  width: 25%;
  height: 1px;
  border: 2px solid white;
}

.typewrite {
  text-decoration-line: none;
  color: white;
  text-shadow: 0vw 0vw 10px white;
}

.typewrite:hover {
  color: white;
}
.fa-brands {
  color: white;
  font-size: 25px;
  gap: 10px;
  text-shadow: 0vw 0vw 10px white;
  overflow-x: hidden;
}
#Icon {
  display: flex;
  justify-content: space-between;
  width: 25%;
}
#border {
  border: 2px solid white;
  align-self: center;
  height: 140px;
}

.px {
    padding-right: 1.25rem!important;
    padding-left: 1.05rem!important;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(270px);
}

.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-up-enter-active {
  transition: all 1s ease;
}

.blobs-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  right: 85%;
  top: 85%;
}
@media(width:2560px){
  .blob-container{
    right: 20% !important;
  }
}
@media (max-width: 1440px) and (min-width: 1025px) {
  .blobs-container {
    right: 75%;
  }
  .inst_box {
  display: flex;
  width: 80vw;
  height: 490px;
   position: absolute;
  top: 2%; 
}
}
@media (max-width: 426px) {
  .blobs-container {
    display: none;
    right: 0% !important;
  }

  .github {
    display: none;
  }

  .info{
    display: none;
  }

  #Icon {
    display: flex;
    justify-content: space-between;
    width: 45%;
  }

  #content {
    width: 89%;
  }
}
@media (max-width: 769px) and (min-width: 426px) {
  .blobs-container {
    display: none;
    right: 63% !important;
  }

  #Icon {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  #content {
    width: 80% !important;
  }
}

@media (max-width: 1024px) and (min-width: 767px) {
  .blobs-container {
    right: 70%;
  }

  #Icon {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
}

.blob {
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin: 10px;
  height: 50px;
  width: 50px;
  transform: scale(1);
  animation: pulse-black 2s infinite;
}
.blob.purple {
  background: rgba(142, 68, 173, 1);
  box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
  animation: pulse-purple 2s infinite;
  position: relative;
  z-index: 2;
}

.fa-xmark-1 {
  display: none;
  font-size: 25px;
  position: relative;
  left: 34.5%;
  top: 22%;
  color: rgba(142, 68, 173, 1);
}

.fa-xmark-2 {
  display: none;
  font-size: 25px;
  position: relative;
  left: 34.5%;
  top: 23%;
  color: rgba(142, 68, 173, 1);
}

.fa-ghost {
  font-size: 25px;
  position: relative;
  left: 30%;
  top: 22%;
  color: white;
}

.fa-circle-question {
  font-size: 25px;
  position: relative;
  left: 25%;
  top: 25%;
  color: white;
}

.fa-volume-high{
  font-size: 25px;
  position: relative;
  left: 19%;
  top: 25%;
  color: white;
}

.fa-download {
  font-size: 25px;
  position: relative;
  left: 25%;
  top: 25%;
  color: white;
}

.one:hover {
  transition: 1s;
  border-radius: 20%;
}

.two:hover {
  transition: 1s;
  border-radius: 20%;
}

.three:hover {
  transition: 1s;
  border-radius: 20%;
}

.four:hover {
  transition: 1s;
  border-radius: 20%;
}
/* .blob:hover+.fa-github {
  transition: 1s ease-in-out;
  position: absolute;
  background-color: red;
} */

@keyframes pulse-purple {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
  }
}
</style>
