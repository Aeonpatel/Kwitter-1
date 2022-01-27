const firebaseConfig = {
  apiKey: "AIzaSyCcrSpzH9IZSEA7N48IyMFW34iWMMdwhPY",
  authDomain: "kwitter-e3a6f.firebaseapp.com",
  databaseURL: "https://kwitter-e3a6f-default-rtdb.firebaseio.com",
  projectId: "kwitter-e3a6f",
  storageBucket: "kwitter-e3a6f.appspot.com",
  messagingSenderId: "693571120454",
  appId: "1:693571120454:web:98aab68e621fafa8b48947"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addRoom(){
user_name=document.getElementById("room").value;
firebase.database().ref("/").child(user_name).update({
  Aeon:hello
})
}