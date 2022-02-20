<template>
  <nav class="navbar">
    <Navbar />
  </nav>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: "App",
    components: { Navbar }
}
</script>

<style lang="scss">
*{
  font-family: arial;
  color: white;
}
.navbar{
  display: flex;
  flex-direction: row;
}

body{
  background-image: url(./assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin: 1% 5%;
}

</style>
