import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA74r0aZFwwywF0_xIFZfzMN_3V8xhkSxE",
  authDomain: "todo-list-vue-eb646.firebaseapp.com",
  databaseURL: "https://todo-list-vue-eb646.firebaseio.com",
  projectId: "todo-list-vue-eb646",
  storageBucket: "todo-list-vue-eb646.appspot.com",
  messagingSenderId: "914267311665",
  appId: "1:914267311665:web:4ac2108694c263549ecf10",
  measurementId: "G-RZGFPQKVNH",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
