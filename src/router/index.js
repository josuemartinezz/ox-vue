import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/button',
        name: 'Button',
        component: () =>
            import ('../views/Button.vue')
    },
    {
        path: '/alert',
        name: 'Alert',
        component: () =>
            import ('../views/Alert.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router