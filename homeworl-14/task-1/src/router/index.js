import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "@/views/ProductsView.vue"),
  },
  {
    path: "/vendors",
    name: "vendors",
    component: () =>
      import(/* webpackChunkName: "vendors" */ "@/views/VendorsView.vue"),
  },
  // {
  //   path: "/contacts",
  //   name: "contacts",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/ContactsView.vue"),
  // },
  // {
  //   path: "/shopping-rules",
  //   name: "shopping-rules",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/RulesView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
