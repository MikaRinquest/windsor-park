<template>
  <nav id="navbar">
    <img
      src="https://i.postimg.cc/7ZT682hn/houselogo.jpg"
      alt="logo"
      class="logo"
    />
    <ul class="nav-list">
      <router-link to="/">
        <li class="nav-item">Home</li>
      </router-link>
      <router-link to="/about">
        <li class="nav-item">About</li>
      </router-link>
      <router-link to="/property">
        <li class="nav-item">Buy Property</li>
      </router-link>
      <router-link to="/team">
        <li class="nav-item">Team</li>
      </router-link>
      <router-link to="/contact">
        <li class="nav-item">Contact</li>
      </router-link>
      <a href="../../../public/files/windsorpark.pdf" download>
        <li class="nav-item">Download Brochure</li>
      </a>
    </ul>
  </nav>
  <span class="mdi mdi-menu menu" @click.stop="drawer = !drawer"></span>
  <v-navigation-drawer v-model="drawer" absolute temporary id="mobile-nav">
    <v-list nav dense class="list-holder">
      <img
        src="https://i.postimg.cc/7ZT682hn/houselogo.jpg"
        alt="logo"
        class="mobile-logo"
      />
      <ul class="nav-list d-flex flex-column">
        <router-link to="/">
          <li class="nav-item">Home</li>
        </router-link>
        <router-link to="/about">
          <li class="nav-item">About</li>
        </router-link>
        <router-link to="/property">
          <li class="nav-item">Buy Property</li>
        </router-link>
        <router-link to="/team">
          <li class="nav-item">Team</li>
        </router-link>
        <router-link to="/contact">
          <li class="nav-item">Contact</li>
        </router-link>
        <a href="../../../files/windsorpark.pdf" download>
          <li class="nav-item">Download Brochure</li>
        </a>
      </ul>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss">
#navbar {
  display: flex;
  align-items: center;
  background-color: $navy;
  position: fixed;
  height: 15%;
  z-index: 100;
  top: 0;
  left: 0;
}

.logo {
  width: 15%;
}

.nav-list {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.nav-item {
  color: $gold;
  font-size: 18px;
  font-weight: 500;
}

// Mobile Responsiveness
// Extra Small devices (Portrait phones, 280px and up)
@media (min-width: 250px) {
  .nav-button {
    display: block;
    position: fixed;
    right: 0;
    z-index: 10;
  }

  #mobile-nav {
    position: fixed !important;
    height: 100vh;
    background-color: $navy;
  }

  .list-holder {
    padding-top: 0;
  }

  .mobile-logo {
    width: 100%;
  }

  .menu {
    font-size: 35px;
    padding-right: 10px;
    position: fixed;
    right: 0;
    z-index: 5;
  }

  .nav-item {
    font-size: 25px;
    margin-bottom: 15px;
  }

  #navbar {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  #mobile-nav {
    display: none;
  }

  .menu {
    display: none;
  }

  #navbar {
    display: flex;
    width: 100vw;
  }

  .nav-button {
    display: flex;
    background-color: transparent;
  }
}
</style>
