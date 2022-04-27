var firebaseConfig = {
      apiKey: "AIzaSyAUtHPQG_Z3ujeh0DtcHZ2BZqprc0mm780",
      authDomain: "kwitter-9713b.firebaseapp.com",
      databaseURL: "https://kwitter-9713b-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-9713b",
      storageBucket: "kwitter-9713b.appspot.com",
      messagingSenderId: "16116984368",
      appId: "1:16116984368:web:832aacb856a0008ee19bf5"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
