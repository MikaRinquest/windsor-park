<template>
  <div class="holder">
    <div class="bg"></div>
    <h2 class="heading">Contact Us</h2>
    <div class="contact-form">
      <v-form @submit.prevent="sendEmail">
        <v-row class="row">
          <v-col>
            <v-text-field
              v-model="firstName"
              label="First name"
              required
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last name"
              required
            ></v-text-field>
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field
              v-model="phone"
              label="Phone Number"
              required
            ></v-text-field>
            <v-text-field
              v-model="alt"
              label="Alternative Number"
              required
            ></v-text-field>
          </v-col>
          <v-col class="sec2-holder">
            <div>
              <p class="question">Are you a pre-approved buyer?</p>
              <span class="radio">
                <input type="radio" name="fQ1" value="Yes" v-model="status" />
                <label for="fQ1">Yes</label>
              </span>
              <span class="radio">
                <input type="radio" name="fQ2" value="No" v-model="status" />
                <label for="fQ2">No</label>
              </span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d828.5851193065084!2d18.7036648!3d-33.8293291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc56aca0a75189%3A0x47360fbdb23b8914!2sWindsor%20Park%2C%20Cape%20Town%2C%207570!5e0!3m2!1sen!2sza!4v1676646600681!5m2!1sen!2sza"
              width="400"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="iframe"
            ></iframe>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn type="submit" class="btn mt-2" color="grey-lighten-2"
            >SEND EMAIL</v-btn
          >
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import { useEmailStore } from "../../stores/emailing.js";

export default {
  setup() {
    const emailStore = useEmailStore();

    return { emailStore };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      alt: "",
      status: "",
      preApproved: "",
    };
  },

  methods: {
    sendEmail() {
      if (this.status === "No") {
        this.preApproved = "not interested in becoming a pre-approved buyer";
      } else {
        this.preApproved = "interested in becoming a pre-approved buyer.";
      }

      const emailBody = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phone,
        altNumber: this.alt,
        preApproved: this.preApproved,
      };

      this.emailStore.sendEmail(emailBody);

      console.log(emailBody);
    },
  },
};
</script>
<style lang="scss" scoped>
.holder {
  margin-left: 5%;
}

.question {
  font-size: 18px;
}

.radio {
  padding-right: 10px;
  font-size: 18px;
}

.btn {
  width: 20%;
  margin-bottom: 10px;
}

@media (min-width: 250px) {
  .bg {
    background-image: url("https://i.postimg.cc/7Y2wbjyL/telephone-g7e59d55c9-1280.jpg");
  }

  .holder {
    margin-left: 0;
  }

  .row {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .iframe {
    width: 250px;
  }

  .btn {
    width: 50%;
  }
}

@media (min-width: 350px) {
  .sec2-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .iframe {
    width: 300px;
  }
}

@media (min-width: 576px) {
  .bg {
    background-image: url("https://i.postimg.cc/7Y2wbjyL/telephone-g7e59d55c9-1280.jpg");
  }
}
</style>
