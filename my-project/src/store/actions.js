import { fetchNewsList, fetchJobsList, fetchAskList, fetchList } from './../api/index.js';

export default {
    async FETCH_USER(context) {
        const res = await fetchNewsList();
        context.commit('SET_USER', res.data);
    },
    async FETCH_JOBS(context) {
        const res = await fetchJobsList();
        context.commit('SET_JOBS', res.data);
    },
    async FETCH_ASK(context) {
        const res = await fetchAskList();
        context.commit('SET_ASK', res.data);
    },
    async FETCH_LIST(context, routerName) {
        const res = await fetchList(routerName);
        context.commit('SET_NEWSLIST', res.data);
    }
}