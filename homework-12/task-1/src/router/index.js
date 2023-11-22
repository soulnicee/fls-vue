import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
    component: () => import("@/views/WorkersView.vue"),
  },
  {
    path: "/workers/edit/:id?",
    name: "workers-edit",
    component: () => import("@/views/WorkersEditView.vue"),
    props: (route) => ({workerId: parseInt(route.params.id)})
  },
  {
    path: "/aplicants",
    name: "aplicants",
    component: () => import("@/views/AplicantsView.vue"),
  },
  {
    path: "/aplicants/edit/:id?",
    name: "aplicants-edit",
    component: () => import("@/views/AplicantsEditView.vue"),
    props: (route) => ({aplicantId: parseInt(route.params.id)})
  },
  {
    path: "/interviews",
    name: "interviews",
    component: () => import("@/views/InterviewsView.vue"),
  },
  {
    path: "/interviews/edit/:id?",
    name: "interviews-edit",
    component: () => import("@/views/InterviewsEditView.vue"),
    props: (route) => ({interviewId: parseInt(route.params.id)})
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
