import firebase from './firebase';

function authGaurd (to, from, next) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            next();
        } else {
            next('/login');
        }
    });
}

export default authGaurd;