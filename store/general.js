export const state = () => ({
    data: {
        adress: {
            city:"Gliwice",
            street:"ul. Józefa Elsnera 1/7",
            zip_code:"44-100",
        },
        call_to_action_footer: {
            description:"Stwórz z nami niesamowitą i funkcjonalną aplikację!",
            link: {
                link: "mailto:support@webo.agency",
                title: "support@webo.agency",
            },
        },
        call_to_action_header: {
            button: {
                hyperlink: "mailto:support@webo.agency",
                title: "Napisz do nas",
            },
        },
        call_to_action_section: {
            button:{
                text: "Porozmawiajmy \no Twoim *projekcie*",
                title: "Zainteresowany?"
            },
            text: "Porozmawiajmy \no Twoim *projekcie*",
            title: "Zainteresowany?",
        },
        company: "Webo Maciej Zawadzki",
        company_short: "Webo",
        copyright: "All rights reserved",
        mail_general: "hello@webo.agency",
        nip: "6312613626",
        regon: "382471232",
        telephone: {
            link:"tel:+48223906234",
            title:"+48 22 39 06 234",
        }
    }
});

export const getters = {
    getFooterData: ($state) => {
        return $state.data
    }
}

export const mutations = {
    save($state, data) {
        Object.assign($state, data);
    }
};

export const actions = {
    init (context, data) {
        context.commit('save', data);
    }
}
