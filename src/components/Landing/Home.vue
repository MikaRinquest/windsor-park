<template>
  <div class="bg">
    <div class="title">
      <h3 class="heading">Own your new home</h3>
      <p class="subheading">Starting from R1 600 000</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("https://i.postimg.cc/d0pJHNQt/true-landing.jpg");

  height: 85vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  height: 25%;
  border-radius: 10px;
  background-color: $navy;
  opacity: 0.8;
  color: $gold;
  margin-left: 15%;
  padding-left: 10px;
}

@media (min-width: 250px) {
  .bg {
    justify-content: center;
  }

  .title {
    width: 85%;
    height: 20%;
    margin-left: 0;
  }

  .heading {
    font-size: 20px;
  }

  .subheading {
    font-size: 18px;
  }
}
@media (min-width: 350px) {
  .bg {
    justify-content: center;
  }

  .title {
    width: 85%;
    height: 20%;
    margin-left: 0;
  }

  .heading {
    font-size: 30px;
  }

  .subheading {
    font-size: 25px;
  }
}
@media (min-width: 575px) {
  .bg {
    justify-content: flex-start;
  }

  .title {
    width: 25%;
    height: 25%;
    margin-left: 15%;
  }
}
</style>
