// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXNXcz4imP-lHSwduZ__fY6VLfXMB1NZM",
  authDomain: "comsio-c9fa1.firebaseapp.com",
  projectId: "comsio-c9fa1",
  storageBucket: "comsio-c9fa1.firebasestorage.app",
  messagingSenderId: "226382593451",
  appId: "1:226382593451:web:cded86cdf887d98c9466ee",
  measurementId: "G-KY2FD971SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
