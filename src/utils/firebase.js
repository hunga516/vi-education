// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${process.env.REACT_FBASE_API}`,
    authDomain: `${process.env.REACT_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_PROJECTID}`,
    storageBucket: `${process.env.REACT_STOREDBUCKET}`,
    messagingSenderId: `${process.env.REACT_MESSAGEINGSENDID}`,
    appId: `${process.env.REAC_APPID}`,
    measurementId: `${process.env.REACT_MEANSUREID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()