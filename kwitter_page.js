var firebaseConfig = {
      apiKey: "AIzaSyDJL7EpCScHa4jA1i5rwIrRoI5GMcfBDqw",
      authDomain: "kwitter-58e33.firebaseapp.com",
      databaseURL: "https://kwitter-58e33-default-rtdb.firebaseio.com",
      projectId: "kwitter-58e33",
      storageBucket: "kwitter-58e33.appspot.com",
      messagingSenderId: "775716694699",
      appId: "1:775716694699:web:b7f59142f2cb7dd34325ee",
      measurementId: "G-EB5DX256QD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
