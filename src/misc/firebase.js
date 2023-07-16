import {firebase} from '@firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config ={
    apiKey: "AIzaSyBzOW2vyqFbUQKzanYNAWadlMcgO9LhM-o",
    authDomain: "chat-app-839d7.firebaseapp.com",
    projectId: "chat-app-839d7",
    storageBucket: "chat-app-839d7.appspot.com",
    messagingSenderId: "1015343742135",
    appId: "1:1015343742135:web:97f661adb0cab6a0be6132"
  };

  const app=firebase.initializeApp(config)
  export const auth=app.auth()
  export const database=app.database()