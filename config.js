import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlkWU8J_fUFPmiZRbqtQA9K1l22JB3jLQ",
    authDomain: "pro-67-a8a2a.firebaseapp.com",
    databaseURL: "https://pro-67-a8a2a-default-rtdb.firebaseio.com",
    projectId: "pro-67-a8a2a",
    storageBucket: "pro-67-a8a2a.appspot.com",
    messagingSenderId: "707970348741",
    appId: "1:707970348741:web:8f05f91257b51c08d5a2ac"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();