import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view){
    return import(`./views/${view}.vue`);
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: lazyLoad('Home')
    },
    {
        path: '/rules',
        name: 'rules',
        component: lazyLoad('Rules')
    },
    {
        path: '/adopt',
        name: 'adopt',
        component: lazyLoad('Adopt')
    },
];

const router = createRouter({ history: createWebHistory(), routes: routes});

export default router;

