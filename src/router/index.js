import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import OnboardingStepOne from "../views/Onboarding/StepOne.vue";
// import OnboardingStepTwo from "../views/Onboarding/StepTwo.vue";
import UserHome from "../views/user/UserHome.vue";
import UserPlanView from "../views/user/PlanView.vue";
import UserTontinesView from "../views/user/TontinesView.vue";
import UserAccountView from "../views/user/AccountView.vue";
import UserNotificationView from "../views/user/NotificationView.vue";
import UserDetailsView from "../views/user/details.vue";

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
    path: "/user/notifications",
    name: "UserNotificationsView",
    component: UserNotificationView,
  },
  {
    path: "/user/plans",
    name: "UserPlanView",
    component: UserPlanView,
  },
  {
    path: "/user/tontines",
    name: "UserTontinesView",
    component: UserTontinesView,
  },
  {
    path: "/user/account",
    name: "UserAccountView",
    component: UserAccountView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/details/:id",
    name: "UserDetailsView",
    component: () => import("../views/user/details.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
