<template>
   <header>
    <input type="checkbox" id="checkBox">
    <input type="checkbox" id="social">
    <input type="checkbox" id="infoCheck">
    <div  class="toggle" @click="handleEvent()">
        <span class="top_line common"></span>
        <span class="middle_line common"></span>
        <span class="bottom_line common"></span>
    </div>
    
    <div>
        <div class="slide">
        <h1 id="Menu">MENU</h1>
        <ul>
        <li class="navs-links"><a href="/" :key="$route.fullPath"><i class="fa-solid fa-house-chimney"></i> HOME</a></li>
        <li class="navs-links"><router-link to="/about"><i class="fa-solid fa-circle-info"></i> ABOUT</router-link></li>
        <li class="navs-links"><router-link to="/resume"><i class="fa-solid fa-address-card"></i> RESUME</router-link></li>
        <li class="navs-links"><router-link to="/project"><i class="fa-solid fa-list-check"></i> PROJECTS</router-link></li>
        <li class="navs-links"><router-link to="/testimonials"><i class="fa-solid fa-user-group"></i> TESTIMONIALS</router-link></li>
        <li class="navs-links"><router-link to="/contact"><i class="fa-solid fa-phone-flip"></i> CONTACT</router-link></li>
        </ul>
        </div>
    </div>
    </header> 
</template>
<script>
export default {
    data() {
        return {
            isChecked: false
        }
    },
    mounted(){
        window.addEventListener('keydown', this.keyPress);
    },
    methods: {
        handleEvent() {
           this.isChecked = !this.isChecked;
           console.log(this.isChecked)
            if(this.isChecked == true){
             document.querySelector("#checkBox").checked = true;
             document.querySelector('.slide').style.transform= "translateX(0px)";
             document.querySelector('.slide').style.transition= "all 0.8s ease";
            }
            if (this.isChecked == false){ 
            document.querySelector("#checkBox").checked = false;
             document.querySelector('.slide').style.transform= "translateX(-300px)"
            }
        },
        keyPress(event){
            if(event.code === 'KeyD'){
               this.handleEvent()
                console.log(e)
            }
        }
    }
    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background-color:#f2f2f2;
}
.slide{
    height:100%;
    width: 300px;
     position: fixed;
    background-color: #fff;
    transform: translateX(-300px);
    z-index:3;
    overflow:hidden;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
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

#Menu{
    color: #8000ff;
    font-weight: 300;
    text-align: right;
    padding: 10px 0;
    padding-right: 90px;
    pointer-events: none;
    text-shadow: 0vw 0vw 10px #8000ff ;
}

.navs-links{
    list-style: none;
    font-size:13px;
}

.navs-links a{
    color: #011a41;
    font-weight: 500;
    padding: 25px 0;
    display: block;
    text-transform: capitalize;
    text-decoration: none;
}

.navs-links a i{
    width: 40px;
    text-align: center;

}

.navs-links>a{
 padding-left:0;
 text-align: start;
}

#checkBox{
display: none; 
visibility: hidden ;
-webkit-appearance: none;
}

#social{
    display: none;
    visibility: hidden ;
    -webkit-appearance: none;
}

#infoCheck{
    display: none;
    visibility: hidden ;
    -webkit-appearance: none;
}



.toggle{
    position: fixed;
    height:30px;
    width: 30px;
    top: 15px;
    left: 17px;
    z-index: 1;
    cursor: pointer;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 4;
}

.toggle .common{
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: #8000ff;
    border-radius: 50px;
    transition: 0.3s ease;
    left:0;


}

.toggle .top_line{
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.toggle .middle_line{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.toggle .bottom_line{
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
}

#checkBox:checked ~ .toggle .top_line{
    left: 2px;
    top: 14px;
    width: 25px;
    transform: rotate(45deg);
}

#checkBox:checked ~ .toggle .bottom_line{
    left: 2px;
    top: 14px;
    width: 25px;
    transform: rotate(-45deg);
}

#checkBox:checked ~ .toggle .middle_line{
   opacity: 0;
    transform: translateX(20px);
}

input:checked ~ .slide{
    transform:translateX(0)
}
.navs-links>a:hover{
color: white;
}

.navs-links{
    transition: 0.9s;
    background-color: white;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}
.navs-links:hover{
    transition: 1s;
    color: white;
    background-color: #8000ff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    transition: all 1.5s ease;
    text-shadow: 0vw 0vw 10px white;
}
</style>