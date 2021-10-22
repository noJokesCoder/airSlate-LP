const logInBtn = document.getElementById("logIn");

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

//The RegEx above was stolen from freeCodeCamp. it validates that
// a) the input has at least one @,
// b) at least one dot "."
// c) @ is not first character in a string
// d) dot is not immediately after @

const validate = (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const pswrd = document.getElementById("password");

  // check-up that email field is not empty
  if (email.value === "") {
    alert("Please enter a correct email.");
    email.focus();
    return false;
  }
  if (!emailIsValid(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }
  // check that password field is not empty
  if (pswrd.value === "") {
    alert("Please enter your password, this field cannot be empty.");
    pswrd.focus();
    return false;
  } else {
    console.log(`Client email: ${email.value}`);
    console.log(`Client password: ${pswrd.value}`);
    // and now we clear the input fields =)
    email.value = "";
    pswrd.value = "";
  }
};
logInBtn.addEventListener("click", validate);
