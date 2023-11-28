import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import store from "@/store/index.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {requiresAuth: false}
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {requiresAuth: false}
  },
  {
    path: "/lessons/select",
    name: "select_lessons",
    component: () => import(/* webpackChunkName: "lessons" */ "@/views/SubjectsView.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/lessons/:lessonsId+",
    name: "select_teachers",
    props: (route) => ({selectedSubjectsList: route.params.lessonsId.map((item) => parseInt(item))}),
    component: () => import(/* webpackChunkName: "lessons" */ "@/views/TeachersView.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/lessons/:lessonPair+/",
    name: "lessons_list",
    component: () => import(/* webpackChunkName: "lessons" */ "@/views/LessonsView.vue"),
    meta: {requiresAuth: true}
  },
  {
		path: '/:pathMatch(.*)*',
		name: '404',
		component: PageNotFoundView,
		meta: { requiresAuth: false }
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
	const isLogin = store.getters.isAuth;
	if (to.meta.requiresAuth && !isLogin) {
		return {
			name: 'login',
			query: { redirect: to.fullPath },
		}
	}
})
export default router;
