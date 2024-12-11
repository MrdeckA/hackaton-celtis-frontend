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
    path: "/user/history",
    name: "AccountHistory",
    component: () => import("../views/user/account/HistoryView.vue"),
  },
  {
    path: "/user/profile",
    name: "AccountProfile",
    component: () => import("../views/user/account/ProfileView.vue"),
  },
  {
    path: "/user/password",
    name: "AccountPasword",
    component: () => import("../views/user/account/PasswordView.vue"),
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
    path: "/user/plans/:id",
    name: "UserPlanDetailView",
    component: () => import("../views/user/details.vue"),
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
  {
    path: "/test",
    name: "test",
    component: () => import("../test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
