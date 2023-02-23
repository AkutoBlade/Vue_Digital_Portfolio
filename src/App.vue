<template>
<NavBar/>
  <router-view />
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
  name:'navbar',
  components:{NavBar}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
*{
  font-family: 'Varela Round';
  user-select: none;
}

::-webkit-scrollbar {
  width: 9px;
  height: 2px;
}
::-webkit-scrollbar-track {
  background: white;   
}
::-webkit-scrollbar-thumb {
  background:#8000ff;
}

html{
  overflow-x: hidden;
}

body{
   background-color: #8000ff;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
