import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import TasksView from '../views/TasksView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/tasks', name: 'Tasks', component: TasksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
