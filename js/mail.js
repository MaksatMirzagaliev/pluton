const firebaseConfig = {
   apiKey: "AIzaSyAwMKTQGMTLVN1j8tqEXMtzGy7v7dtWWuw",
   authDomain: "contactform-2a255.firebaseapp.com",
   databaseURL: "https://contactform-2a255-default-rtdb.firebaseio.com",
   projectId: "contactform-2a255",
   storageBucket: "contactform-2a255.appspot.com",
   messagingSenderId: "560855478320",
   appId: "1:560855478320:web:0a3cb310a8cfe1ab8b7df5",
   measurementId: "G-GZ4HDK307E"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
   e.preventDefault();


   var msgContent = getElementVal("msgContent");

   saveMessages(msgContent);

   //   enable alert
   document.querySelector(".alert").style.display = "block";

   //   remove the alert
   setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
   }, 3000);

   //   reset the form
   document.getElementById("contactForm").reset();
}

const saveMessages = (msgContent) => {
   var newContactForm = contactFormDB.push();

   newContactForm.set({
      msgContent: msgContent,
   });
};

const getElementVal = (id) => {
   return document.getElementById(id).value;
};