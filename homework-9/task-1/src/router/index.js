import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ShopPage from "@/views/ShopPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import PaymentPage from "@/views/PaymentPage.vue";
import ContactsPage from "@/views/ContactsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopPage,
  },
  {
    path: "/product/:category",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
