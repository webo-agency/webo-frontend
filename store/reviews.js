const createArrayFromObjects = (source) => {
    const distArray = [];
    for (const key in source) {
        distArray.push(source[key])
    }
    return distArray;
}

export const state = () => ({
    front_page: [],
    slides_reviews: [],
    data: {}
});

export const getters = {
    getFrontPage(state) {
        return state.slides_reviews; 
    }
};

export const mutations = {
    save(state, data) {
        state.data = { ...state.data, ...data };
    },
    saveFrontPage(state, data) {
        state.front_page = { ...data };

        const stateData = createArrayFromObjects(state.data);
        const reviewsArray = stateData.reverse();

        reviewsArray.filter((review, reviewIndex) => {
            if(review.id === state.front_page[reviewIndex] && review.acf.single_review_title !== '') {
                
                state.slides_reviews.push({
                    id: review.id,
                    title: review.acf.single_review_title,
                    content: review.acf.single_review_description,
                    author: review.acf.single_review_person,
                    company: review.acf.single_review_company,
                });
            }
        });
    }
};

export const actions = {
    init (context, data) {
        context.commit('save', data);
    }
}
