import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NewDeck from '../views/NewDeck.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/deck/new',
    name: 'New Deck',
    component: NewDeck,
  },
  {
    path: '/deck/:deckId',
    name: 'Show Deck',
    component: () => import('../views/ShowDeck.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
