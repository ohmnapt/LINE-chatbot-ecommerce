import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import Hero from '../components/Hero.vue'


const routerHistory = createWebHistory()

const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: home
    },
    {
        path: '/com',
        name: 'Com',
        component: Hero
    }
]

const router = createRouter(
    {
        history: routerHistory,
        routes
    }
)
export default router