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
  font-family: 'Poppins', sans-serif;
  user-select: none;
}

html{
  background-color: #8000ff;
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
