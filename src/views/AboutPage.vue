<template>
  <main id="About">
    <div class="row" id="Box">
      <div class="col-md-6 ps-0">
        <img class="images img-fluid" src="https://i.postimg.cc/T2gTGb04/Jared.jpg" alt="" />
      </div>
      <div class="col-md-6" id="#info">
        <h1 class="text-center Display-1 About-Me">About Me</h1>
        <h2 class="text-start Display-1 Bio">Bio</h2>
        <div class="divider-2"></div>
        <p class="text-black pt-2">
          I'm Jared Isaacs, a Full-Stack Web Developer based out of working at
          Life Choices Academy. I love structure and order and also stand for
          quality. I love spending time on fixing little details. Also I love
          working in a team. As the saying goes: "two heads are better than one"
        </p>
        <div class="divider-2"></div>
        <div class="skills">
          <div class="col-md-6 right">
            <h3 class="Display-1 text-center text-light overflow-hidden">
              Technical Skills
            </h3>
            <div class="row py-3 paddings">
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
            <div class="row py-3 paddings">
               <h6 class="text-start overflow-hidden" >HTML</h6>
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
            <div class="row py-3 paddings">
               <h6 class="text-start overflow-hidden" >CSS3</h6>
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
            <div class="row py-3 paddings">
               <h6 class="text-start overflow-hidden" >BootStrap</h6>
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
            <div class="row py-3 paddings">
              <h6 class="text-start overflow-hidden" >JavaScript</h6>
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
              <li class="py-4">Emotional Intelligients</li>
              <li class="py-4">Growing Mindset</li>
              <li class="py-4">Team Player Attitude</li>
              <li class="py-4">Adaptability</li>
              <li class="py-4">Problem Solving Skills</li>
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
  height: 800px;
  box-shadow: 0vw 0vw 2vw;
  border-radius: 50px;
  background: linear-gradient(white, #8000ff);
  overflow-y: hidden;
}
#About {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../assets/ContactPage.jpg") no-repeat center center/cover;
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
  align-items: center;
}
.skills {
  display: flex;
  flex-direction: row;
  margin-top: 4%;
  height: 35%;
}

.left {
  border-left: 2px solid white;
  padding-left: 20px;
}

.progress-bar{
  background-color: #8000ff;
  right:10%;
}

.progress{
  width: 80%;
  height: 10px;
  border-radius: 0% !important;
}


.list {
  list-style: none;
}

.list>li::before{
  content: '✔';
  color: #8000ff;
  margin-right: 95px;
}

.images{
  width:100%;
}
</style>
