import axios from 'axios';

export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    async nuxtServerInit({dispatch, commit}, {req}) { // eslint-disable-line

        // dispatch with a payload
        // dispatch('incrementAsync')

        return axios.get(process.env.API_URL.concat('/acf/v3/options/options'))
            .then((res) => {
                commit('general/save', res.data.acf);
                //console.log(res); // eslint-disable-line
                // console.log(context.env.API_URL); // eslint-disable-line
            });
    },
}
