import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Service from '../views/Service.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';


const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/about', name: 'About', component: About },
   { path: '/service', name: 'Service', component: Service },
   { path: '/blog', name: 'Blog', component: Blog },
   { path: '/contact', name: 'Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
