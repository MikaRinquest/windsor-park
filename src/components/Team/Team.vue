<template>
  <div class="holder">
    <div class="bg"></div>
    <div>
      <v-tabs v-model="tab" align-tabs="center" class="tab-holder">
        <v-tab value="one" class="btn-title">Vision</v-tab>
        <v-tab value="two" class="btn-title">Mission</v-tab>
      </v-tabs>

      <div>
        <v-window v-model="tab">
          <v-window-item value="one" class="text text-center"
            >To provide safe and affordable homes for both the current and
            future generations.
          </v-window-item>

          <v-window-item value="two" class="text text-center">
            By providing the option for future homeowners to choose their own
            additions to the homes, we provide the opportunity to create your
            dream home.
          </v-window-item>
        </v-window>
      </div>
    </div>
    <div
      class="team d-flex flex-column justify-center"
      v-for="(team, i) in teams"
      :key="i"
      :data-index="index"
    >
      <h3 class="subheading member text-uppercase">{{ team.member }}</h3>
      <h4 class="member-name">{{ team.name }}</h4>
      <img :src="team.image" alt="Logo" :class="team.class" />
      <span class="d-flex flex-column">
        <a :href="team.mailto" class="email">Email: {{ team.email }}</a>

        <a class="number" :href="team.tel">Phone Number: {{ team.phone }} </a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    teams: [
      {
        member: "owner",
        name: "Heinrich Louw",
        image: "https://picsum.photos/300",
        desc: "Description",
        mailto: "mailto:heinrich@capewinelands.gov.za",
        tel: "tel:+27 65 127 3477",
        email: "heinrich@capewinelands.gov.za",
        phone: "",
        class: "member-image",
      },
      {
        member: "architect",
        name: "Developer Name",
        image: "https://picsum.photos/300",
        desc: "Description",
        mailto: "mailto:insertemailhere@xyz.com",
        tel: "tel:+27 65 127 3477",
        email: "Enquiries@sabindi.co.za",
        phone: "",
        class: "member-image",
      },
      {
        member: "Development Team",
        name: "Sabindi Group Global",
        image:
          "https://i.postimg.cc/6pw3ghby/Whats-App-Image-2023-02-23-at-17-28-14.jpg",
        desc: "Description",
        mailto: "mailto:insertemailhere@xyz.com",
        tel: "tel:+27 65 127 3477",
        email: "Enquiries@sabindi.co.za",
        phone: "+27 65 127 3477",
        class: "member-image",
      },
      {
        member: "Sales Agent",
        name: "Abdul Sayed",
        image: "https://i.postimg.cc/g0vk2z0H/Polish-20221116-085835626.png",
        desc: "Description",
        mailto: "mailto:abduls@wetradeproperty.co.za",
        tel: "tel:+27 65 127 3477",
        email: "abduls@wetradeproperty.co.za",
        phone: "+27 74 975 2215",
        class: "abdul-image",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.holder {
  margin-left: 5%;
}

.bg {
  background-image: url("https://i.postimg.cc/VLfLDrHK/meeting-gd735848b9-1280.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 50vh;
}

.tab-holder {
  color: $gold !important;
}

.text {
  font-size: 18px;
}

.btn-title {
  font-size: 25px;
}

.team {
  width: 40%;
  margin-bottom: 15px;
  border-bottom: 1px solid #bdbdbd;
}

.member {
  font-size: 40px;
  text-transform: capitalize;
}

.member-name {
  font-size: 25px;
  padding-bottom: 5px;
}

.member-image {
  padding-bottom: 5px;
  width: 50%;
}

.abdul-image {
  padding-bottom: 5px;
  width: 35%;
}

.desc {
  padding-bottom: 5px;
}

.number {
  margin-bottom: 10px;
}

.email,
.number {
  font-size: 18px;
}

@media (min-width: 250px) {
  .btn-title {
    font-size: 20px;
  }

  .subheading {
    font-size: 25px;
  }

  .team {
    width: 100%;
  }

  .member-image {
    width: 90%;
  }

  .email,
  .phone {
    font-size: 16px;
  }
}

@media (min-width: 350px) {
  .text,
  .number,
  .email {
    font-size: 18px;
  }
}

@media (min-width: 768px) {
  .tab-holder {
    color: $gold !important;
  }

  .text {
    font-size: 18px;
  }

  .btn-title {
    font-size: 25px;
  }

  .team {
    margin-bottom: 15px;
    border-bottom: 1px solid #bdbdbd;
    width: 60%;
  }

  .member {
    font-size: 40px;
    text-transform: capitalize;
  }

  .member-name {
    font-size: 25px;
    padding-bottom: 5px;
  }

  .member-image {
    padding-bottom: 5px;
    width: 55%;
  }

  .abdul-image {
    padding-bottom: 5px;
    width: 35%;
  }

  .desc {
    padding-bottom: 5px;
  }

  .number {
    margin-bottom: 10px;
  }

  .email,
  .number {
    font-size: 18px;
  }
}
</style>
