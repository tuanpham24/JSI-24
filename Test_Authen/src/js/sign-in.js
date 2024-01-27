const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signInForm = document.querySelector('#sign-in-form');

const handleSignIn = (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if(!email || !password) {
    alert('Please fill all fields');
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...

    // get displayName here
    console.log(user.displayName);
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}

signInForm.addEventListener('submit', event => {
  handleSignIn(event)
})