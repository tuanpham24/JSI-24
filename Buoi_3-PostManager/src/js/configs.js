// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevqZMM8IgQP60IwQGDbn3Lz4Dx_pJ050",
  authDomain: "mindx-9f3ae.firebaseapp.com",
  projectId: "mindx-9f3ae",
  storageBucket: "mindx-9f3ae.appspot.com",
  messagingSenderId: "405619882979",
  appId: "1:405619882979:web:fc864d8bb72fe48f2abed6",
  measurementId: "G-Z75BHCGVYH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
