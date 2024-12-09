import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import OnboardingStepOne from "../views/Onboarding/StepOne.vue";
// import OnboardingStepTwo from "../views/Onboarding/StepTwo.vue";
import UserHome from "../views/user/UserHome.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  // {
  //   path: "/OnboardingStepOne",
  //   name: "OnboardingStepOne",
  //   component: OnboardingStepOne,
  // },
  // {
  //   path: "/OnboardingStepTwo",
  //   name: "OnboardingStepTwo",
  //   component: OnboardingStepTwo,
  // },
  {
    path: "/user/home",
    name: "UserHomeView",
    component: UserHome,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
