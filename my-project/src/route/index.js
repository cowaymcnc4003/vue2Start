import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../view/NewsView.vue'
import JobsView from '../view/JobsView.vue'
import AskView from '../view/AskView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
    ]
})
