import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
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
        path: '/detail',
        name: 'ProductDetail',
        component: ProductDetail
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