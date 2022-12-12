<template>
<div id="LandingBack">
    <div class="blobs-container">
  <div class="blob purple"></div>
  <div class="blob purple"></div>
  <div class="blob purple"></div>
  <div class="blob purple"></div>
  <div class="blob purple"></div>
  <div class="blob purple"></div>

</div>
    <div id="border"></div>
    <diV id="content">
              <h1 >
  <a href="" class="typewrite Display-1" data-period="2000" data-type='[ "Jared Isaacs..", "I am an Aspiring Web-Developer...", "I am an Aspiring App-Developer...", "I am a Freelancer."  ]'>
    <span class="wrap"></span>
  </a>
</h1>
       <br>
       <span id="divider"></span>
       <br>
        <!-- <h1>
  <a href="" class="typewrite" data-period="2000" data-type='[ "Jared Isaacs..", "I am an Aspiring Web-Developer...", "I am an Aspiring App-Developer...", "I am a Freelancer."  ]'>
    <span class="wrap"></span>
  </a>
</h1> -->
<transition name="fade-up" appear>
    <div id="Icon">
 <a href=""><i class="fa-brands fa-github"></i></a> 
<a href=""><i class="fa-brands fa-linkedin"></i></a>
<a href=""><i class="fa-brands fa-codepen"></i></a> 
<a href=""><i class="fa-brands fa-twitter"></i></a>
 </div>
 </transition>

    </diV>
    
</div>
</template>
<script>
import NavBar from '@/components/Footer.vue'
export default {
    
}
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
*{
    font-family: 'Poppins', sans-serif;
    overflow-y:hidden;
}
#LandingBack{
    display: flex;
    justify-content: flex-end;
    background: url("../assets/LandingPage.jpg")no-repeat center center/cover;
    width:100%;
    min-height: 100vh;
background-attachment: fixed;
overflow-x:hidden

}
#content{
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 20px;
width:65%
}

#title{
    color: white;
}

#divider{
    width:25%;
    height: 1px;
    border: 2px solid white;
}

.typewrite{
    text-decoration-line: none;
    color: white;
}

.typewrite:hover{
    color: white;
}
.fa-brands{
    color: white;
    font-size:25px;
    gap: 10px;
}
#Icon{
    display: flex;
    justify-content: space-between;
    width:25%;
}
#border{
    border: 2px solid white;
    align-self: center;
    height:140px;
}

.fade-up-enter-from{
    opacity: 0;
    transform: translateY(270px); 
}

.fade-up-enter-to{
opacity: 1;
transform: translateY(0px);
}

.fade-up-enter-active{
    transition: all 1s ease;
}

.blobs-container {
  display: flex;
 justify-content: flex-end;
 align-items: flex-end;
 position: absolute;
 right: 73%;
 top:88%;


}

@media(max-width:1440px) and (min-width:1025px){
  .blobs-container{
    right: 67%;
  }
}
 @media(max-width:426px){
  .blobs-container{
  display: none;
    right: 0% !important;
  }

    #Icon{
    display: flex;
    justify-content: space-between;
    width:45%;
}

  #content{
  width: 89%;
  }


}
   @media(max-width:769px) and (min-width:426px){
  .blobs-container{
    right: 46% !important;
  }

  #Icon{
    display: flex;
    justify-content: space-between;
    width:40%;
}
 

#content{
width:80% !important;
}

  }


@media(max-width:1024px) and (min-width:767px){
  .blobs-container{
    right: 59%;
  }

  #Icon{
    display: flex;
    justify-content: space-between;
    width:40%;
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
}

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