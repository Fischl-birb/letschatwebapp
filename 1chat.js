// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDdtVwKSDs7UcBUY7ZEKfQXlDf-brs4k60",
    authDomain: "lets-chatwebapp.firebaseapp.com",
    databaseURL: "https://lets-chatwebapp-default-rtdb.firebaseio.com",
    projectId: "lets-chatwebapp",
    storageBucket: "lets-chatwebapp.appspot.com",
    messagingSenderId: "364559550263",
    appId: "1:364559550263:web:15b829c26db43749cebcb2"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

  function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "lets chat.html";
  }
  




