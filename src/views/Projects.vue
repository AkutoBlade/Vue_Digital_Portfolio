<template>
  <section class="bgimg row">
    <div v-for="project in projects" key="project.id" class="size col-md-4"> 
      <div class="d-flex flex-nowrap container">
        <div class="projects-card project-one" :style="{ 'background-image': 'url(' + project.img + ')'}">
		<div class="project-info-container">
			<h3 class="project-titles">{{ project.title }}</h3>  
			<span class="project-load-bar" ></span>
			<p class="project-short-desc">{{ project.desc }}</p> 
			<button class="project-btn"> <a :href="project.live">Live</a> </button>

		</div>
    </div>
      </div>
    </div>

  </section>
  <Footer/>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  data(){
    return{
      name: "footer",
      
      projects: [{
        id: 1,
        title: "Rainbow Project",
        language: "HTML, CSS3",
        img:"https://i.postimg.cc/ryPNL2MM/1.png",
        width: 100,
        height:100,
        desc: "This consist mostly of CSS3, box-shadow one-o-one",
        github:"https://github.com/AkutoBlade/Rainbow.git",
        live:"https://singular-yeot-5dcc8a.netlify.app/"
      },
      {
        id: 2,
        title: "Calculator Project",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/13J0R8qn/2.png",
        width: 100,
        height:100,
        desc: "Making problem solving a bit easier",
        github:"https://github.com/AkutoBlade/Calculator.git",
        live:"https://elaborate-jalebi-073b2d.netlify.app/"
      },
      {
        id: 3,
        title: "Digital Portfolio",
        language: "HTML, CSS3, JavaScript, BootStrap",
        img:"https://i.postimg.cc/L5w7byHS/3.png",
        width: 100,
        height:100,
        desc: "BootStrap makes responsiveness easier for once website",
        github:"https://github.com/AkutoBlade/Bootstrap_Portfolio.git",
        live:"https://chipper-youtiao-e77086.netlify.app/"
      },
      {
        id: 4,
        title: "Properties List",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/8CY05K66/4.png",
        width: 100,
        height:100,
        desc: "Fuctionality is key, anyone looking for a property to buy?",
        github:"https://github.com/AkutoBlade/Property-Listing-Project.git",
        live:"https://property-listing-crud-jared.netlify.app/"
      },
      {
        id: 5,
        title: "Hex To RBG",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/63RYQ9Kk/5.png",
        width: 100,
        height:100,
        desc: "Need some colour themes?",
        github:"https://github.com/AkutoBlade/Hex_To_RGB.git",
        live:"https://flourishing-kitten-140371.netlify.app/"
      },
      {
        id: 6,
        title: "BMI Calculator",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/cHZ8QZwy/6.png",
        width: 100,
        height:100,
        desc: "See if you're weighing the weight you want",
        github:"https://github.com/AkutoBlade/BMI-calculator.git",
        live:"https://grand-rugelach-b17744.netlify.app/"
      }
    ],
    }},
    components: { Footer},
 
  mounted() {
    // const buttons = document.querySelectorAll("[data-carousel-button]");

    // buttons.forEach((button) => {
    //   button.addEventListener("click", () => {
    //     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    //     const slides = button
    //       .closest("[data-carousel]")
    //       .querySelector("[data-slides]");

    //     const activeSlide = slides.querySelector("[data-active]");
    //     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    //     if (newIndex < 0) newIndex = slides.children.length - 1;
    //     if (newIndex >= slides.children.length) newIndex = 0;

    //     slides.children[newIndex].dataset.active = true;
    //     delete activeSlide.dataset.active;
    //   });
    // });
  },
  computed: {
    // projects() {
    //   return this.$store.state.projects;

    // },
  },
};
</script>
<style scoped>
/* variables */
:root {
	/* Color */
	--main-color:#8000ff;
	--secondary-color: #fff;


	/* Font-size */
	--font-size-main-title: 6rem;
	--font-size-secondary-title: 2.5rem;
	--font-size-section-title: 3rem;
	--font-size-project-title: 2em;
	--font-size-text: 1.2rem;
	--font-size-btn: 1.6rem;
} 
*,
*::before,
*::after {
  box-sizing: border-box;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  display: none;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180vh;
  overflow-x: hidden;
}
template {
  margin: 0;
}

.bgimg{
background: url("../assets/ContactPage.jpg") no-repeat center center/cover;
background-size: cover;
background-position: center;
object-fit: cover;
width:90vw;
}


.slides {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 300ms opacity ease-in-out;
}

.slides > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.size{
	height: 30em;
}

.containers{
  width: 100vw;
  height: 100vh;
}

.projectBack {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.493);
  position: absolute;
  top: 0%;
  border-radius: 50px;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&display=swap');



* {
	box-sizing: border-box;
  overflow-x: hidden;
}

body, html {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	font-family: 'Montserrat', sans-serif;
	font-size: 10px;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	background: #f2f2f2;
}


.projects-card {
	position: relative;
	width: 25em;
	height: 30em;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, .2);
	padding: 1em;
	background-image: url(https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
	background-position: center center;
	background-size: cover;
	transition: 1s;
	overflow-y: hidden;
  border-radius: 10px;
}

.project-info-container {
	position: absolute;
	top: 80%;
	left: 0;
	width: 100%;
	height: 100%;
	transition: .5s;
	padding: 0 1em 1em 1em;
	overflow: hidden;
}

.project-titles {
	font-size: var(--font-size-project-title);
	color: #8000ff;
	font-weight: 800;
	text-transform: uppercase;
	margin: 1em 0 .3em 0;
	transition: .3s;
}

.project-load-bar {
	width: 0;
	height: 3px;
	background: var(--main-color);
	margin: 0;
}

.projects-card:hover {
	transform: scale(1.05);
  border-radius: 10px;
}

.projects-card:hover .project-info-container {
	top: 48%;
	left: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1em;
	background: linear-gradient(hsl(0 0% 0% / 0),hsl(20 0% 0% / 0.3) 20%,hsl(0 0% 0% / 1));
}

.project-short-desc, .project-btn{
	font-size: var(--font-size-text);
	color: #fff;
  margin: 1em 0 0 0;
	display: none;
	opacity: 0;
	font-weight: 200;
}

.project-btn {
	max-width: 10em;
	padding: .7em 0;
	margin: 1.5em 0;
	display: none;
	justify-content: center;
	border: none;
	border-radius: 15px;
	background: var(--main-color);
	text-transform: uppercase;
	font-size: 1rem;
	cursor: pointer;
	transition: .5s;
}

.project-btn a{
	color: #fff;
	font-weight: 400;
	justify-self: center;
	text-decoration: none;
}

.project-btn:hover {
	transform: scale(1.05);
}


.projects-card:hover{
	color: #fff;
}

.projects-card:hover .project-load-bar {
	display: flex;
	transition: opacity 1s ease;
	animation: project-load-animation 2s ease .1s forwards;
}

.projects-card:hover .project-short-desc {
	display: flex;
	transition: opacity 1s ease;
	animation: project-infos-animation 1s ease .8s forwards;
}

.projects-card:hover .project-btn{
	display: flex;
	transition: opacity 1s ease;
	animation: project-infos-animation 1s ease .8s forwards;
}


@keyframes project-load-animation {
  0% {width: 0;}
	15% {width: 0vw;}
  25% {width: 0vw;}
	50% {width: 35vw;}
	65% {width: 50vw;}
	75% {width: 75vw;}
	100% {width: 100vw;}
}


@keyframes project-infos-animation {
  from {opacity: 0;}
  to {opacity: 1;}
}
@media(max-width:2560px) and (min-width:1441px){
  .projects-card{
    width: 70em;
  }

  section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
  padding-left: 15px;
  overflow-y: hidden;
}
}
@media(min-width:1440PX){
.bgimg{
width:100.481vw;
}
}

@media(max-width:1024px){
  .bgimg{
width:102.9vw;
height:200vh ;
}
}

@media(max-width:768px){
  .bgimg{
width:102.9vw;
}
.size{
  margin-bottom:3%;
}
}

@media(max-width:425px){
  .bgimg{
width:102.95vw !important;
}

}

@media(max-width:375px){
  .bgimg{
width:103.8vw !important;
}

}
/* 
.title-position {
  position: absolute;
  top: 20%;
  left: 9%;
  color: #8000ff;
}

.lan-position {
  position: absolute;
  top: 35%;
  left: 9%;
}
.desc-position {
  position: absolute;
  top: 45%;
  left: 9%;
  color: #38046b;
}

.buttons {
  text-decoration: none;
  position: absolute;
  top: 55%;
  left: 9%;
  width: 85px;
  background: #8000ff;
  color: white;
  text-align: center;
  border-radius: 50px;
  height: 25px;
}

.b-1 {
  left: 25%;
}

<--.carousels {
  width: 50vw;
  height: 50vh;
  position: relative;
  box-shadow: 0vw 0vw 1vw black;
  border-radius: 50px;
} -->

.carousels > ul {
  list-style: none;
}

.slides {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 300ms opacity ease-in-out;
}

.slides > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.slides[data-active] {
  opacity: 1;
}

.carousel-buttons {
  position: absolute;
  background: none;
  border: none;
  font-size: 4rem;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  color: white;
  text-shadow: 0vw 0vw 1vw black;
}

.carousel-buttons:hover,
.carousel-buttons:focus {
  font-size: 4.5rem;
}



@media(max-width:1440px){
.carousels {
  width: 100vw;
  height: 100vh;
  position: relative;
  box-shadow: 0vw 0vw 1vw black;
}

.prevs {
  right: 95%;
  z-index: 2
}

.nexts {
  left: 95%;
  z-index:2;
}

.projectBack {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.493);
  position: absolute;
  top: 0%;
}
}

@media(max-width:1024px) and (min-width:769px){
.title-position {
  top: 19%;
  left: 5%;
}

.lan-position {
  top: 35%;
  left: 5%;
}
.desc-position {
  top: 45%;
  left: 5%;
}

.buttons {
  top: 70%;
  left: 5%;
}

.b-1 {
  left: 25%;
}

}

@media(width:768px) and (min-width:426px){
.title-position {
  top: 19%;
  left: 5%;
}

.lan-position {
  top: 35%;
  left: 5%;
}
.desc-position {
  top: 45%;
  left: 5%;
}

.buttons {
  top: 70%;
  left: 5%;
}

.b-1 {
  left: 29%;
}

}

@media(max-width:425px){
.title-position {
  top: 19%;
  left: 5%;
}

.lan-position {
  top: 35%;
  left: 5%;
}
.desc-position {
  top: 45%;
  left: 5%;
}

.buttons {
  top: 70%;
  left: 5%;
}

.b-1 {
  left: 25%;
}





} */

</style>
