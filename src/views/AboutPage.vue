<template>
  <main id="About">
    <div class="row" id="Box">
      <div class="col-md-5 ps-0">
        <img
          class="images img-fluid"
          src="https://i.postimg.cc/T2gTGb04/Jared.jpg"
          alt=""
        />
      </div>
      <div class="col-md-7" id="#info">
        <h1 class="text-center Display-1 About-Me">About Me</h1>
        <h2 class="text-start Display-1 Bio">Bio</h2>
        <div class="divider-2"></div>
        <p class="text-black pt-2 bio_text">
          I'm Jared Isaacs, a Full-Stack Web Developer based out of working at
          Life Choices Academy. I love structure and order and also stand for
          quality. I love spending time on fixing little details. Also I love
          working in a team. As the saying goes: "two heads are better than one"
        </p>
        <div class="divider-2"></div>
        <div class="skills">
          <div class="col-md-6 right">
            <h3 class="Display-1 text-center text-ligh skill_sizet overflow-hidden">
              Technical Skills
            </h3>
            <div class="row py-1 paddings">
              <h6 class="text-start overflow-hidden">MySQL</h6>
              <div class="progress">
                <div
                  class="progress-bar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="row py-1 paddings">
              <h6 class="text-start overflow-hidden">HTML</h6>
              <div class="progress">
                <div
                  class="progress-bar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="row py-1 paddings">
              <h6 class="text-start overflow-hidden">CSS3</h6>
              <div class="progress">
                <div
                  class="progress-bar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="row py-1 paddings">
              <h6 class="text-start overflow-hidden">BootStrap</h6>
              <div class="progress">
                <div
                  class="progress-bar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="row py-1 paddings">
              <h6 class="text-start overflow-hidden">JavaScript</h6>
              <div class="progress">
                <div
                  class="progress-bar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 left">
            <h3 class="Display-1 text-center text-light overflow-hidden">
              Soft Skills
            </h3>
            <ul class="list">
              <li class="py-1 skill_size">Emotional Intelligients</li>
              <li class="py-1 skill_size">Growing Mindset</li>
              <li class="py-1 skill_size">Team Player Attitude</li>
              <li class="py-1 skill_size">Adaptability</li>
              <li class="py-1 skill_size">Problem Solving Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  name: "footer",
  components: { Footer },
};
</script>
<style scoped>
* {
  overflow-x: hidden;
}
#Box {
  width: 90vw;
  height: 500px;
  box-shadow: 0vw 0vw 2vw;
  border-radius: 50px;
  background: linear-gradient(white, #8000ff);
  overflow-y: hidden;
  opacity:0.9;
}

#Box:hover{
  box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
  animation: pulse-purple 2s infinite;
}

@keyframes pulse-purple {
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


#About {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180vh;
  background: url("../assets/ContactPage.jpg") no-repeat center center/cover;
}

h6{
font-size:13px
}

.skill_size{
font-size:13px;
width:100%;
}

.bio_text{
font-size:13px;
}

.About-Me {
  padding-top: 10px;
  overflow: hidden;
  text-shadow: -5px 1px 8px black;
  color: white;
}
.Bio {
  padding-top: 10px;
  padding-left: 10px;
  overflow: hidden;
  color: #8000ff;
}
.divider-2 {
  border-bottom: 2px solid white;
  width: 80%;
  margin-left: 8%;
}
#info {
  display: flex;
  flex-direction: column;
}
.skills {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  height: 54%;
  width:100%;
  padding-bottom: 0px;
}

.left {
  border-left: 2px solid white;
  padding-left: 1px;
  width:200px;
}

.progress-bar {
  background-color: white;
  right: 10%;
}

.progress {
  width: 80%;
  height: 10px;
  border-radius: 0% !important;
  background-color: #8000ff;
}

.list {
  list-style: none;
}

.list > li::before {
  content: "✔";
  color: white;
  margin-right: 2%;
}

.images {
  width: 25%;
  border-radius: 10%;
  position: absolute;
  right: 65%;
  top: 10%;

}

@media(max-width:2560px) {
  .images {
  width: 22%!important;
  border-radius: 10%;
  position: absolute;
  right: 67%;
  top: 11%!important;
}
}
@media(max-width:1440px){
#About {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../assets/ContactPage.jpg") no-repeat center center/cover;
}

.images {
  width: 22%!important;
  border-radius: 10%;
  position: absolute;
  right: 67%;
  top: 15%!important;
}

.skills {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  height: 53%;
  padding-bottom: 0px;
}

}

@media(max-width:1024px) and (min-width: 768px) {
.images {
display:block !important;
  width: 24%!important;
  border-radius: 10%;
  position: absolute;
  right: 65%;
  top: 10%!important;
}

.skills {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  height: 55%;
  padding-bottom: 0px;
}

#Box {
  width: 90vw;
  height: 450px;
  box-shadow: 0vw 0vw 2vw;
  border-radius: 50px;
  background: linear-gradient(white, #8000ff);
  overflow-y: hidden;
}


.Bio {
  padding-top: 0px !important;
  padding-left: 10px;
  overflow: hidden;
  color: #8000ff;
}

.bio_text{
font-size:11px;
}

.skill_size{
font-size:11px;
}

h6{
font-size:11px
}
}

@media(max-width:768px){

#About {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background: url("../assets/ContactPage.jpg") no-repeat center center/cover;
}

.images {
display:none;
  width: 30%!important;
  border-radius: 10%;
  position: absolute;
  right: 62%;
  top: 34%!important;
}

.skills {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  height: 55%;
  padding-bottom: 0px;
}

#Box {
  width: 95vw;
  height: 500px;
  box-shadow: 0vw 0vw 2vw;
  border-radius: 50px;
  background: linear-gradient(white, #8000ff);
  overflow-y: hidden;
}

.Bio {
  padding-top: 0px !important;
  padding-left: 10px;
  overflow: hidden;
  color: #8000ff;
}

.bio_text{
font-size:11px;
}

.skill_size{
font-size:11px;
}

h6{
font-size:11px
}


}

@media(width:425px){

#About {
  display: flex;
  justify-content: center;
  align-items: center;
  height:150vh;
  background: url("../assets/ContactPage.jpg") no-repeat center center/cover;
}

#Box {
  width: 95vw;
  box-shadow: 0vw 0vw 2vw;
  border-radius: 50px;
  background: linear-gradient(white, #8000ff);
  overflow-y: hidden;
  height: 500px !important;
}
.images {
  display:none!important;
  width: 30%!important;
  border-radius: 10%;
  position:absolute;
  right: 62%;
  top: 23%!important;
}

.skills {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  height: 55%;
  padding-bottom: 0px;
}


.Bio {
  padding-top: 0px !important;
  padding-left: 10px;
  overflow: hidden;
  color: #8000ff;
}

.bio_text{
font-size:11px;
}

.skill_size{
font-size:11px;
}

h6{
font-size:11px
}


}
</style>
