import Vue from 'vue'
import VueRouter from 'vue-router'
// import NewsView from '../view/NewsView.vue'
// import JobsView from '../view/JobsView.vue'
// import AskView from '../view/AskView.vue'
import CreateListView from '../view/CreateListView.js'

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
            component: CreateListView('NewsView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: CreateListView('JobsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component:  CreateListView('AskView'),
        },
    ]
})
