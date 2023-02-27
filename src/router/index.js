import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import About from "../views/About.vue";
import BuyProperty from "../views/BuyProperty.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/property",
      name: "BuyProperty",
      component: BuyProperty,
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;
