import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAE6hUm7g2H-p0hzVZHTi_ztDya8Bn6CJI",
    authDomain: "login-efc4b.firebaseapp.com",
    databaseURL: "https://login-efc4b.firebaseio.com",
    projectId: "login-efc4b",
    storageBucket: "login-efc4b.appspot.com",
    messagingSenderId: "95338535768"
};
const fire = firebase.initializeApp(config);
export default fire;