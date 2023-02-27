<template>
  <div class="holder">
    <div class="bg"></div>
    <h2 class="heading">Developments</h2>
    <div>
      <h3 class="subheading">Units</h3>
      <div class="text-holder">
        <span class="d-flex flex-column">
          <p class="text">
            The Windsor Park residential estate will feature 3 bespoke designed
            modern units with a contemporary look and feel. Nestled in the heart
            of Kraaifontein with an array of amenities in close proximity, this
            new development is borne out of sheer class and luxury at a superb
            price point.
          </p>
          <p class="text">
            Construction commences in April 2023 with practical completion
            expected by end of August 2023.
          </p>
        </span>
        <img
          src="https://i.postimg.cc/x8m260hR/IMG-20230214-WA0023.jpg"
          alt="Image of House"
          class="text-image"
        />
      </div>
      <div class="btn-holder d-flex justify-space-between">
        <a href="../../assets/windsor-park.pdf" download class="button first"
          >Download a Brochure</a
        >
        <button class="button second">
          <router-link to="/contact"> Contact an Agent </router-link>
        </button>
      </div>
    </div>
    <div class="carousel">
      <h3 class="subheading">Rendered Images</h3>
      <v-carousel cycle hide-delimiters show-arrows="hover" height="400">
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.image"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: "https://i.postimg.cc/x8m260hR/IMG-20230214-WA0023.jpg",
        },
        {
          image: "https://i.postimg.cc/jdFZcHtR/IMG-20230214-WA0024.jpg",
        },
        {
          image: "https://i.postimg.cc/25pTRC1J/IMG-20230214-WA0022.jpg",
        },
        {
          image: "https://i.postimg.cc/vZxXN4Zf/IMG-20230214-WA0027.jpg",
        },
        {
          image: "https://i.postimg.cc/02QV7Wgt/IMG-20230214-WA0029.jpg",
        },
        {
          image: "https://i.postimg.cc/brY3CLZw/IMG-20230214-WA0030.jpg",
        },
        {
          image: "https://i.postimg.cc/wMBQcvrt/IMG-20230214-WA0032.jpg",
        },
        {
          image: "https://i.postimg.cc/BZhgZT82/IMG-20230214-WA0034.jpg",
        },
        {
          image: "https://i.postimg.cc/P5DzM0SM/IMG-20230214-WA0035.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.holder {
  margin-left: 5%;
}

.button {
  color: $navy;
  background-color: white;
  transition: all 0.5s ease-in;
  border-radius: 5px;
}

.first:hover,
.first:focus {
  box-shadow: inset 300px 0 0 0 $gold;
  color: $navy;
}

.second:hover,
.second:focus {
  box-shadow: inset 300px 0 0 0 $gold;
  color: $navy;
}

// Mobile Responsiveness
//Extra Small Devices
@media (min-width: 250px) {
  .text-holder {
    flex-direction: column;
    justify-content: flex-start;
  }

  .text {
    width: 100%;
  }

  .text-image {
    width: 80%;
    justify-self: center;
  }

  v-carousel {
    height: 300px;
  }

  .v-carousel__controls__item.v-btn.v-btn--icon {
    width: 20px;
  }

  .btn-holder {
    width: 90vw;
    flex-direction: column;
    align-items: center;
  }

  .button {
    font-size: 15px;
    margin-bottom: 5px;
  }
}

@media (min-width: 350px) {
  .text {
    width: 95%;
    font-size: 18px;
  }

  .button {
    font-size: 18px;
    margin-top: 5px;
  }
}

@media (min-width: 768px) {
  .text-holder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .text {
    width: 70%;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .text-image {
    width: 30%;
  }

  .btn-holder {
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    margin-top: 10px;
  }

  .button {
    width: 40%;
    font-size: 16px;
  }

  .carousel {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  v-carousel {
    height: 400px;
  }

  .subheading {
    margin-bottom: 10px;
  }
}
</style>
