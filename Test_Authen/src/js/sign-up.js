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

  // 
  if (!fullname || !dateOfBirth || !email || !password || !passwordRepeat) {
    alert("Please fill all fields");
    return;
  }

  if (password != passwordRepeat) {
    alert("Password is not match");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;

      // Update the user's display name
      user.updateProfile({
        displayName: fullname
      }).then(() => {
        // Display name updated successfully
        console.log('Display name updated successfully:', user.displayName);
      }).catch((error) => {
        console.error('Error updating display name:', error.message);
      });

      console.log(user);

      db.collection("users")
        .add({
          fullname,
          dateOfBirth,
          email,
          password
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

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
