import {myBtn} from "./local.js";

console.log(myBtn);

 Btn_2 = document.getElementById("myBtn_2");

 Btn_2.addEventListener("click", () => {


  let inputemail_2 = document.getElementById("inputemail_2");
  let temp_4Name = inputemail_2.value;

  let inputPassword_2 = document.getElementById("inputPassword_2");
  let temp_5Name = inputPassword_2.value;


  // local storage

  let jsEmail_2 = JSON.stringify(temp_4Name);
  window.localStorage.setItem("myEmail_2", jsEmail_2);

  let jsPassword_2 = JSON.stringify(temp_5Name);
  window.localStorage.setItem("myPassword_2", jsPassword_2); 

  
  inputemail_2.value = "";
  inputPassword_2.value = "";

if(temp_2 === temp_4Name && temp_3 === temp_5Name  ) {

 location.href = "local_2.html"

} else {
 
 alert('שם משתמש וסיסמא שגויים');   

}

});

