// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChURep_FhXHKUxZOx0MIMi_RErJcJgcFA",
  authDomain: "seaconvoy-c8d9e.firebaseapp.com",
  projectId: "seaconvoy-c8d9e",
  storageBucket: "seaconvoy-c8d9e.appspot.com",
  messagingSenderId: "247330510116",
  appId: "1:247330510116:web:5c3552fbb0749004a40fb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
