function adduser(){
  user_name=  document.getElementById("login_name").value;
  localStorage.setItem("key",user_name);
 window.location="kwitter_room.html";
}