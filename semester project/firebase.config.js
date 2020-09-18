import * as firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyAae1Y_zH5DnxD9njMpahIdafS8Eix1QZI",
    authDomain: "allout-app.firebaseapp.com",
    databaseURL: "https://allout-app.firebaseio.com",
    projectId: "allout-app",
    storageBucket: "allout-app.appspot.com",
    messagingSenderId: "571392815715",
    appId: "1:571392815715:web:f65c1fbc5ed64e094ffe56",
    measurementId: "G-C8LD33P4L6"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase