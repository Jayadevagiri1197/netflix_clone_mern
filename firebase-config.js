
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWzKe2Jz1oNW7ySkFDohwL0JgHSMSqf-k",
  authDomain: "react-netflix-clone-e5686.firebaseapp.com",
  projectId: "react-netflix-clone-e5686",
  storageBucket: "react-netflix-clone-e5686.appspot.com",
  messagingSenderId: "240420909760",
  appId: "1:240420909760:web:28f368deb1aae6be793325",
  measurementId: "G-PXC5J1NLV5"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);