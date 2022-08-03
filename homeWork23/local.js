

  myBtn = document.getElementById("myBtn");
  myBtn.addEventListener("click", () => {


  let inputname = document.getElementById("inputname");
  let temp_1Name = inputname.value;

  let inputemail = document.getElementById("inputemail");
  let temp_2Name = inputemail.value;

  let inputPassword = document.getElementById("inputPassword");
  let temp_3Name = inputPassword.value;


  // local storage
  let jsName = JSON.stringify(temp_1Name);
  window.localStorage.setItem("myUserName", jsName);

  let jsEmail = JSON.stringify(temp_2Name);
  window.localStorage.setItem("myEmail", jsEmail);

  let jsPassword = JSON.stringify(temp_3Name);
  window.localStorage.setItem("myPassword", jsPassword); 

  
    location.href = "local_2.html";

   

  inputname.value = "";
  inputemail.value = "";
  inputPassword.value = "";
});

