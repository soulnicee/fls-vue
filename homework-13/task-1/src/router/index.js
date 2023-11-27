import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import store from "@/store/index.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {auth: false}
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {auth: false}
  },
  {
    path: "/lessons/select",
    name: "select_lessons",
    component: () => import(/* webpackChunkName: "lessons" */ "../views/SubjectsView.vue"),
    meta: {auth: true}
  },
  {
    path: "/lessons/:lessonsId+",
    name: "select_teachers",
    props: (route) => ({selectedSubjectsList: route.params.lessonsId.map((item) => parseInt(item))}),
    component: () => import(/* webpackChunkName: "lessons" */ "../views/TeachersView.vue"),
    meta: {auth: true}
  },
  {
    path: "/lessons/:lessonPair+/",
    name: "lessons_list",
    component: () => import(/* webpackChunkName: "lessons" */ "../views/LessonsView.vue"),
    meta: {auth: true}
  },
  {
		path: '/:pathMatch(.*)*',
		name: '404',
		component: PageNotFoundView,
		meta: { auth: false }
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
	const isAuth = store.getters.isAuth;
	if (to.meta.auth && isAuth) {
		return {
			name: 'login',
			query: { redirect: to.fullPath },
		}
	}
})
export default router;
