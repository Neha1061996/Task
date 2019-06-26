import firebase from 'firebase';


 var firebaseConfig = {
    apiKey: "AIzaSyCMgNcP8jZkFgYyddUKA4PYureoBsHLjSE",
    authDomain: "login-aa9ec.firebaseapp.com",
    databaseURL: "https://login-aa9ec.firebaseio.com",
    projectId: "login-aa9ec",
    storageBucket: "",
    messagingSenderId: "38941118623",
    appId: "1:38941118623:web:1d8b3c6a23d93791"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;