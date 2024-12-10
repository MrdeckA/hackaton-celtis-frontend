import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
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
    component: () => import("../views/user/UserHome.vue"),
  },
  {
    path: "/user/notifications",
    name: "UserNotificationsView",
    component: () => import("../views/user/NotificationView.vue"),
  },
  {
    path: "/user/plans",
    name: "UserPlanView",
    component: () => import("../views/user/PlanView.vue"),
  },
  {
    path: "/user/tontines",
    name: "UserTontinesView",
    component: () => import("../views/user/TontinesView.vue"),
  },
  {
    path: "/user/account",
    name: "UserAccountView",
    component: () => import("../views/user/AccountView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/user/tontines/create",
    name: "UserCreateTontine",
    component: () => import("../views/user/tontines/TontineAdd.vue"),
  },
  {
    path: "/details/:id",
    name: "UserDetailsView",
    component: () => import("../views/user/details.vue"),
  },
  {
    path: "/user/tontines/:id",
    name: "TontineDetailsView",
    component: () => import("../views/user/tontines/TontineDetailView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
