import wpApi from 'wpapi'

export default ({app, store, params}) => {
    app.$wp = new wpApi(<%= serialize(options) %>);
}