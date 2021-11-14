import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATLVVHMnMuMGEtOJ5q-fRKa4iZj8oqpTQ",
  authDomain: "uber-clone-web.firebaseapp.com",
  projectId: "uber-clone-web",
  storageBucket: "uber-clone-web.appspot.com",
  messagingSenderId: "876219895691",
  appId: "1:876219895691:web:66cc42157687dbc8ac298e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }