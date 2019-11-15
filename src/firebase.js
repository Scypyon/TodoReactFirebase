import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUY0RAyhqPqM1rNAJiksFHT5WgifSLhbs",
  authDomain: "todousersbase.firebaseapp.com",
  databaseURL: "https://todousersbase.firebaseio.com",
  projectId: "todousersbase",
  storageBucket: "todousersbase.appspot.com",
  messagingSenderId: "435146282504",
  appId: "1:435146282504:web:8472a164cfc417451aa3bd",
  measurementId: "G-BFCESM7BNW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
