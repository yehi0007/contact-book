import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddContact from "../views/AddContact.vue";
import EditContact from "../views/EditContact.vue";
import ContactDetailsView from "../views/ContactDetailsView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: AddContact },
  { path: "/edit/:id", component: EditContact, props: true },
  { path: "/contact/:id", component: ContactDetailsView, props: true },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
