import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/user/home",
    name: "UserHomeView",
    component: () => import("../views/UserHome.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
