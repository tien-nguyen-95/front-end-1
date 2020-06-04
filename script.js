function checkForm(){
  event.preventDefault();
  let first = document.getElementById('first').value;
  let last = document.getElementById('last').value;
  let email = document.getElementById('email').value;
  let pass = document.getElementById('pass').value;
  console.log(validateEmail(email));
  //first name
  if(first == ""){
    document.getElementById('first').style.border = ".5px solid red";
    document.getElementById('errFirst').style.display = "block";
  }
  else{
    document.getElementById('first').style.border = ".5px solid black";
    document.getElementById('errFirst').style.display = "none";
  }

  //last name
  if(last == ""){
    document.getElementById('last').style.border = ".5px solid red";
    document.getElementById('errLast').style.display = "block";
  }
  else{
    document.getElementById('last').style.border = ".5px solid black";
    document.getElementById('errLast').style.display = "none";
  }

  //email
  if(email == ""){
    document.getElementById('email').style.border = ".5px solid red";
    document.getElementById('errEmail').style.display = "block";
  }
  else if(!validateEmail(email)){
    document.getElementById('email').style.border = ".5px solid red";
    document.getElementById('errEmail').style.display = "block";
    document.getElementById('msgEmail').innerHTML = "Look like this is not an email";
  }
  else{
    document.getElementById('email').style.border = ".5px solid black";
    document.getElementById('errEmail').style.display = "none";
  }

  //password
  if(pass == ""){
    document.getElementById('pass').style.border = ".5px solid red";
    document.getElementById('errPass').style.display = "block";
  }
  else{
    document.getElementById('pass').style.border = ".5px solid black";
    document.getElementById('errPass').style.display = "none";
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}