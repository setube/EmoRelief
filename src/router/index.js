import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/home.vue';
import storage from '@/pages/storage.vue';
import extract from '@/pages/extract.vue';


//配置映射关系
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/storage',
        component: storage
    },
    {
        path: '/extract',
        component: extract
    }
]

//创建路由对象
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router