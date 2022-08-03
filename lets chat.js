
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
  firebase.initializeApp(firebaseConfig);

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "chatroom.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "chatroom.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "1index.html";
    }