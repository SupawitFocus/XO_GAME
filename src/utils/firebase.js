import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBty-x943hqLeVWqyqREUWTagPhQBzfB9c",
  authDomain: "xo-game-37f42.firebaseapp.com",
  databaseURL: "https://xo-game-37f42-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xo-game-37f42",
  storageBucket: "xo-game-37f42.appspot.com",
  messagingSenderId: "884999571375",
  appId: "1:884999571375:web:a84173edf2b25ff516915a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);