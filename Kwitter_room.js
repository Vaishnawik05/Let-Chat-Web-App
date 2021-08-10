var firebaseConfig = {
    apiKey: "AIzaSyDPz1YktqukCZCHP1tlBHaeWWH-Yl4HJso",
    authDomain: "kwitter-project-a49de.firebaseapp.com",
    databaseURL: "https://kwitter-project-a49de-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a49de",
    storageBucket: "kwitter-project-a49de.appspot.com",
    messagingSenderId: "622319302808",
    appId: "1:622319302808:web:3d0d4d5e3763f536b2b8ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   });});}
getData();

function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "Kwitter_page.html";
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "Kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
    }