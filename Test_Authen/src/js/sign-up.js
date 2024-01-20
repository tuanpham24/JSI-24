const signUpForm = document.querySelector('#sign-up-form');
const fullnameInput = document.querySelector('#fullname');
const dateOfBirthInput = document.querySelector('#date-of-birth');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordRepeatInput = document.querySelector('#password-repeat');
const signUpBtnInput = document.querySelector('#sign-up-btn');


const handleSignUp = (event) => {
  event.preventDefault()
  let fullname = fullnameInput.value;
  let dateOfBirth = dateOfBirthInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let passwordRepeat = passwordRepeatInput.value;
  let signUpBtn = signUpBtnInput.value;

  const newUser = (
    fullname,
    dateOfBirth,
    email,
    password,
    passwordRepeat,
    signUpBtn
  );

  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
    })

    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
  
}

signUpForm.addEventListener('submit', (event) => {
  handleSignUp(event)
})
