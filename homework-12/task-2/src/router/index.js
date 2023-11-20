import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeachersView from "../views/TeachersView.vue";
import LessonsView from "../views/LessonsView.vue";
import AssignmentsView from "../views/AssignmentsView.vue";
import TeachersEditView from "../views/TeachersEditView.vue";
import LessonsEditView from "../views/LessonsEditView.vue";
import AssignmentsEditView from "../views/AssignmentsEditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/teachers",
    name: "teachers",
    component: TeachersView,
  },
  {
    path: "/teachers/config/:id?",
    name: "teachers-config",
    component: TeachersEditView,
  },
  {
    path: "/lessons",
    name: "lessons",
    component: LessonsView,
  },
  {
    path: "/lessons/config/:id?",
    name: "lessons-config",
    component: LessonsEditView,
  },
  {
    path: "/assignments",
    name: "assignments",
    component: AssignmentsView,
  },
  {
    path: "/assignments/config/:id?",
    name: "assignments-config",
    component: AssignmentsEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
