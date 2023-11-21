import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkersView from "../views/WorkersView.vue";
import AplicantsView from "../views/AplicantsView.vue";
import InterviewsView from "../views/InterviewsView.vue";
import WorkersEditView from "../views/WorkersEditView.vue";
import AplicantsEditView from "../views/AplicantsEditView.vue";
import InterviewsEditView from "../views/InterviewsEditView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
    component: WorkersView,
  },
  {
    path: "/workers/edit/:id?",
    name: "workers-edit",
    component: WorkersEditView,
  },
  {
    path: "/applicants",
    name: "applicants",
    component: AplicantsView,
  },
  {
    path: "/applicants/edit/:id?",
    name: "applicants-edit",
    component: AplicantsEditView,
  },
  {
    path: "/interviews",
    name: "interviews",
    component: InterviewsView,
  },
  {
    path: "/interviews/edit/:id?",
    name: "interviews-edit",
    component: InterviewsEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
