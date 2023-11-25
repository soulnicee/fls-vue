import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/lessons/select",
    name: "select_lessons",
    component: () => import(/* webpackChunkName: "lessons" */ "../views/SubjectsView.vue"),
  },
  {
    path: "/lessons/:lessonsId+",
    name: "select_teachers",
    props: (route) => ({selectedSubjectsList: route.params.lessonsId}),
    component: () => import(/* webpackChunkName: "lessons" */ "../views/TeachersView.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/PageNotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
