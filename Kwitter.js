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
  
function addUser(){
    user_name = document.getElementById("user_name").nodeValue;
    localStorage.setItem("user_name", user_name);
    window.location= "Kwitter_room.html";
}