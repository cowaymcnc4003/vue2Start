import { fetchNewsList } from './../api/index.js';

export default {
    async FETCH_USER(context) {
        const res = await fetchNewsList();
        context.commit('SET_USER', res.data);
    }
}