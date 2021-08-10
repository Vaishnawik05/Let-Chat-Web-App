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

  user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}