import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import ProductDisplay from '../components/FirstStuff.vue'
import Unit3C from '../components/SecondStuff.vue'
import GadgetCatalog from '../components/ThirdStuff.vue'

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/about', 
        component: About 
    },
    { 
        path: '/ProductDisplay', 
        component: ProductDisplay 
    },
    { 
        path: '/Unit3C', 
        component: Unit3C 
    },
    { 
        path: '/GadgetCatalog', 
        component: GadgetCatalog 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    }
})

export default router;