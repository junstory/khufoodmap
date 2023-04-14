const in_id = document.getElementById("user_id");
const in_pw = document.getElementById("user_pw");
const submit = document.getElementById("submit");

function checkAdmin(){
  if(in_id === "admin" && in_pw ==="!jun"){
    location.replace("https://khufoodmap.web.app/setting.html");
  }
  else{
    location.replace("https://khufoodmap.web.app/");
  }
};

object.addEventListener("click", checkAdmin);
