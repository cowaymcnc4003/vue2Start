import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUser, fetchCommentItem } from './../api/index.js';

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
    },
    async FETCH_USERLIST(context, id) {
        const res = await fetchUser(id);
        context.commit('SET_USERLIST', res.data);
    },
    async FETCH_ITEMLIST(context, id) {
        const res = await fetchCommentItem(id);
        context.commit('SET_ITEMLIST', res.data);
    }
}