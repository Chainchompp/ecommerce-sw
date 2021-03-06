import { createRouter, createWebHistory } from "vue-router";
import shLayoutDefault from '../layout/shLayoutDefault.vue'
import shLayoutPayment from '../layout/shLayoutPayment.vue'


import PaymentPage from '../views/PaymentPage.vue'
import HomePage from '../views/HomePage.vue';
import StoreChoosePage from '../views/StoreChoosePage.vue';
import ShoppingCartPage from '../views/ShoppingCartPage.vue';
import ProductPage from '../views/ProductPage.vue'
import ProductSearchPage from '../views/ProductSearchPage.vue'
import ProfilePage from "../views/ProfilePage.vue"
import TracePage from "../views/TracePage.vue"


import { useShopStore } from "../store/modules/shopStore";


const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        alias: '',
        component: HomePage,
        meta: {
            layout: shLayoutDefault,
            requireAuth: false,
        }
    },
    {
        path: '/store',
        name: 'store',
        alias: '',
        component: StoreChoosePage,
        meta: {
            requireAuth: false,
        }
    },
    {
        path: '/cart',
        name: 'cart',
        alias: '',
        component: ShoppingCartPage,
        meta: {
            layout: shLayoutDefault,
            requireAuth: false,
        }
    },
    {
        path: '/buy',
        name: 'buy',
        component: PaymentPage,
        meta: {
            layout: shLayoutPayment,
            requireAuth: true,
        }
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductPage,
        meta: {
            layout: shLayoutDefault,
            requireAuth: true,
        }
    },
    {
        path: '/shop/:id',
        name: 'shop',
        component: ProductSearchPage,
        meta: {
            layout: shLayoutDefault,
            requireAuth: true,
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
        meta: {
            layout: shLayoutDefault,
            requireAuth: true,
        }
    },
    {
        path: '/trace',
        name: 'trace',
        component: TracePage,
        meta: {
            layout: shLayoutDefault,
            requireAuth: true,
        }
    },
    {
        path: '/shop',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const shopStore = useShopStore()
    if (to.name !== 'store' && !shopStore.alreadyChoose) next({ name: 'store' })
    else next()
   
})


export default router
