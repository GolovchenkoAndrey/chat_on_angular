// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzxO0Giku0fjW4q1U_d9Fte2ekMiJHA-8",
    authDomain: "cbschat-6a508.firebaseapp.com",
    databaseURL: "https://cbschat-6a508.firebaseio.com",
    storageBucket: "cbschat-6a508.appspot.com",
    messagingSenderId: "4697114807"
  };
  firebase.initializeApp(config);

angular
    .module('cbsChat', ['firebase']);