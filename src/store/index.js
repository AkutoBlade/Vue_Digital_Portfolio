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
        desc: "This consist mostly of CSS3, box-shadow one-o-one"
      },
      {
        id: 2,
        title: "Calculator Project",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/13J0R8qn/2.png",
        desc: "Making problem solving a bit eaasir"
      },
      {
        id: 3,
        title: "Digital Portfolio",
        language: "HTML, CSS3, JavaScript, BootStrap",
        img:"https://i.postimg.cc/L5w7byHS/3.png",
        desc: "BootStrap makes responsiveness easier for once website"
      },
      {
        id: 4,
        title: "Properties List",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/8CY05K66/4.png",
        desc: "Fuctionality is key, anyone looking for a property to buy?"
      },
      {
        id: 5,
        title: "Hex To RBG",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/63RYQ9Kk/5.png",
        desc: "Need some colour themes?"
      },
      {
        id: 6,
        title: "BMI Calculator",
        language: "HTML, CSS3, JavaScript",
        img:"https://i.postimg.cc/cHZ8QZwy/6.png",
        desc: "See if you're weighing the weight you want"
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})