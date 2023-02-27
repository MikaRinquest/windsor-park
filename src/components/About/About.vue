<template>
  <div class="holder">
    <div class="about">
      <h1 class="heading">ABOUT</h1>
      <p class="information">
        The Windsor Park residential estate will feature 3 bespoke designed
        modern units with a contemporary look and feel. Nestled in the heart of
        Kraaifontein with an array of amenities in close proximity, this new
        development is borne out of sheer class and luxury at a superb price
        point.
      </p>
    </div>
    <div class="transport">
      <h2 class="subheading">TRANSPORT</h2>
      <p class="information">
        Windsor Park is located on Hindle Road in Blue Downs – ideally situated
        for anyone working in Cape Town, Kuilsrivier or the Helderberg region.
        Windsor Parksas great public transport connections. There are existing
        railway stations close by, as well as a new railway link planned between
        Kuilsriver and Blue Downs. There are bus services on Hindle Road and
        MyCiti has future plans to connect to Blue Downs. There are also great
        taxi nodes in the vicinity. Cape Town International Airport is just 15
        km away, perfect for those who travel often.
      </p>
    </div>
    <div class="schools">
      <h2 class="subheading">SCHOOLS</h2>
      <p class="information">
        Windsor Park is nearby a variety of both primary schools and high
        schools, ensuring you never have to worry about finding a school for
        your children.
      </p>
    </div>
    <div class="safety">
      <h2 class="subheading">SAFETY</h2>
      <p class="information">
        Windsor Park is designed to be safe for your family. It's also nearby a
        Mediclinic, the Kraaifontein Police Station and Kraaifontein Fire
        Station.
      </p>
    </div>

    <div class="shopping">
      <h2 class="subheading">SHOPPING</h2>
      <p class="information">
        Windsor Park lies within easy reach of various shopping centres, but
        also has it's own Superspar nearby.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.holder {
  margin-left: 5%;
}

// Mobile Responsiveness
//Extra Small Devices
@media (min-width: 250px) {
  .information {
    font-size: 13px;
    margin-bottom: 5px;
  }
}

// Small devices
@media (min-width: 350px) {
  .holder {
    margin: 0;
  }

  .information {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 18px;
  }
}

// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) {
//   .about {
//     margin-top: 5%;
//   }

//   .subheading {
//     margin: 0;
//   }

//   .information {
//     max-width: 80%;
//     margin-left: 0;
//     font-size: 18px;
//   }
// }
</style>
