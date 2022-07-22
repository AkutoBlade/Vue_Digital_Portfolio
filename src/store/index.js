import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    projects: [{
        id: 1,
        title: "Rainbow Project",
        language: "HTML, CSS3",
        img:"https://i.postimg.cc/ryPNL2MM/1.png",
        desc: "This consist mostly of CSS3, box-shadow one-o-one",
        github:"https://github.com/AkutoBlade/Rainbow.git",
        live:"https://singular-yeot-5dcc8a.netlify.app/"
      },
      {
        id: 2,
        title: "Calculator Project",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/13J0R8qn/2.png",
        desc: "Making problem solving a bit easier",
        github:"https://github.com/AkutoBlade/Calculator.git",
        live:"https://elaborate-jalebi-073b2d.netlify.app/"
      },
      {
        id: 3,
        title: "Digital Portfolio",
        language: "HTML, CSS3, JavaScript, BootStrap",
        img:"https://i.postimg.cc/L5w7byHS/3.png",
        desc: "BootStrap makes responsiveness easier for once website",
        github:"https://github.com/AkutoBlade/Bootstrap_Portfolio.git",
        live:"https://chipper-youtiao-e77086.netlify.app/"
      },
      {
        id: 4,
        title: "Properties List",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/8CY05K66/4.png",
        desc: "Fuctionality is key, anyone looking for a property to buy?",
        github:"https://github.com/AkutoBlade/Property-Listing-Project.git",
        live:"https://property-listing-crud-jared.netlify.app/"
      },
      {
        id: 5,
        title: "Hex To RBG",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/63RYQ9Kk/5.png",
        desc: "Need some colour themes?",
        github:"https://github.com/AkutoBlade/Hex_To_RGB.git",
        live:"https://flourishing-kitten-140371.netlify.app/"
      },
      {
        id: 6,
        title: "BMI Calculator",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/cHZ8QZwy/6.png",
        desc: "See if you're weighing the weight you want",
        github:"https://github.com/AkutoBlade/BMI-calculator.git",
        live:"https://grand-rugelach-b17744.netlify.app/"
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})