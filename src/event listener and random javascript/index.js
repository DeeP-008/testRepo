//javascript entry fike that will hold all the javascript code for the firebase tutorial

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6svnF4NpiioILzg1K-ua2IF0nNYi5o_k",
    authDomain: "fir-project-625d1.firebaseapp.com",
    projectId: "fir-project-625d1",
    storageBucket: "fir-project-625d1.appspot.com",
    messagingSenderId: "8790732444",
    appId: "1:8790732444:web:04af18394ced9b15014759"
  };

  initializeApp(firebaseConfig);    //the import above imports the initializeApp method from firebase's libraries
  // and now we use that method to initialize the webapp by passing the firebaseConfig parameter so that our app knows 
  // which firebase database we are referring to.