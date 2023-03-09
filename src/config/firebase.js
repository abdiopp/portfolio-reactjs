// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTQlkouT7vROstEjEoYaiFJ2XzBfNC6kk",
    authDomain: "abdi-portfolio.firebaseapp.com",
    projectId: "abdi-portfolio",
    storageBucket: "abdi-portfolio.appspot.com",
    messagingSenderId: "450540631171",
    appId: "1:450540631171:web:49ab10610cd60dd93517b6",
    measurementId: "G-E18D96K07J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { analytics, firestore }