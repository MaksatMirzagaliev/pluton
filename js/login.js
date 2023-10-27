   import {initializeApp} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
   import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

   const firebaseConfig = {
      apiKey: "AIzaSyAwMKTQGMTLVN1j8tqEXMtzGy7v7dtWWuw",
      authDomain: "contactform-2a255.firebaseapp.com",
      databaseURL: "https://contactform-2a255-default-rtdb.firebaseio.com",
      projectId: "contactform-2a255",
      storageBucket: "contactform-2a255.appspot.com",
      messagingSenderId: "560855478320",
      appId: "1:560855478320:web:e0061809c29128698b7df5",
      measurementId: "G-2TLQ2EJRMS"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);