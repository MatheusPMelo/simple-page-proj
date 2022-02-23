<template>
  <section class="home">
    <Title titleHome="Home"/>
    
  </section>
</template>

<script>
import Title from "@/components/home/Title.vue";

export default {
  name: 'HomeView',
  components: {
    Title
}
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 75vh;
  background-color: #00b7ff10;
  backdrop-filter: blur(12px);
  border-radius: 2rem;
  animation: shadow 1.5s infinite ease-in-out;
}

@keyframes shadow {
  0%{
    box-shadow: 0 0 10px #ffffff;
  }
  50%{
    box-shadow: 0 0 30px #ffffff;
  }
  100%{
    box-shadow: 0 0 10px #ffffff;
  }
  
}
</style>