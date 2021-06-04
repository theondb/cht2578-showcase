import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import StudentPage from '@/views/StudentPage.vue';
import ProjectPage from '@/views/ProjectPage.vue';
import Error404 from '@/views/Error404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error404,
  },
  {
    path: '/student/:slug',
    name: 'StudentPage',
    component: StudentPage,
  },
  {
    path: '/project/:id',
    name: 'ProjectPage',
    component: ProjectPage,
  },
  {
    path: '*',
    name: 'Error404*',
    component: Error404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
