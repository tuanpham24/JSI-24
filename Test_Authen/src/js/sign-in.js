const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInForm = document.querySelector("#sign-in-form");

const handleSignIn = (event) => {
  event.preventDefault()
  let email = emailInput.value;
  let password = passwordInput.value;

  // Validate user data
  if (!email || !password ) {
    alert("Please fill all fields");
    return;
    }

  console.log(email, password);

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    // ...

    console.log(user);
    localStorage.setItem("user-display-name", JSON.stringify(user.displayName))

    alert("Signin successfully! Click 'ok' to continue.");
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;

    console.log(errorMessage);
    alert("Email or passowrd incorrect. Try again!")
  });

}

signInForm.addEventListener("submit", (event) => {
  handleSignIn(event)
})