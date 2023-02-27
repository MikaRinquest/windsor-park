<template>
  <span class="heading-holder">
    <h2 class="heading">Windsor Park: The Heart of Kraaifontein</h2>
    <div class="border"></div>
  </span>
  <div class="holder">
    <div class="bg">
      <h3 class="subheading">Developments</h3>
      <div class="text-holder">
        <span>
          <v-btn class="button rounded">
            <router-link to="/property"> Find Out More </router-link>
          </v-btn>
          <!-- <v-icon></v-icon> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.heading-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 30px;
}

.border {
  border: 1px solid black;
  width: 45%;
}
.holder {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.bg {
  background-image: url("https://i.postimg.cc/633ZVRdh/floor-plan-g3cf35e060-1280.jpg");
  background-repeat: no-repeat;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  width: 45%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
}

.button {
  background-color: #d4b972;
  padding: 5px;
}

@media (min-width: 250px) {
  .bg {
    width: 80%;
  }

  .subheading {
    text-align: start;
  }
}

@media (min-width: 768px) {
  .bg {
    width: 45%;
  }
}
</style>
