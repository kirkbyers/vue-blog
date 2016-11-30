const _firebase = require('firebase/app');
const _firebaseui = require('firebaseui');
const _vue = require('vue');
const _vuefire = require('vuefire');
require('firebase/database');

_vue.use(_vuefire);

const config = {
    apiKey: ' AIzaSyC5f-ZprxgCA1IjRkS9315S5ZGghZJxV2Y',
    databaseURL: 'https://v-blog-ec076.firebaseio.com'
}

_firebase.initializeApp(config);

export default _firebase