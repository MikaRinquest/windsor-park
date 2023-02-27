<template>
  <v-app>
  <Navbar />
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer />
  </footer>
</v-app>
</template>
<script>
import Navbar from "./components/Navigation/Navbar.vue";
import Footer from "./components/Other/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped></style>
