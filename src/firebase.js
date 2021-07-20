import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB57i0xzT03xSFhSqt4WWVzeoE_w9m3g3o",
    authDomain: "chat-4484a.firebaseapp.com",
    projectId: "chat-4484a",
    storageBucket: "chat-4484a.appspot.com",
    messagingSenderId: "880524584482",
    appId: "1:880524584482:web:1ddff9f7306e3ccc91cc7b"
}).auth();