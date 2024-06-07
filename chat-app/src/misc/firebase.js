import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const config = {
  apiKey: "AIzaSyCgibDbjvhKZXkXnhgguPjice5pQSkMW9g",
  authDomain: "chat-app-beac8.firebaseapp.com",
  projectId: "chat-app-beac8",
  storageBucket: "chat-app-beac8.appspot.com",
  messagingSenderId: "177324689490",
  appId: "1:177324689490:web:aa4d379e54c2df22a9b78b"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();