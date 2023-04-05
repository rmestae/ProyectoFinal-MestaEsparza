

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCDk1xlQYtXo6VdJ9P0Y46nzvu23veZ5JM",
  authDomain: "react-51600-mestaesparza.firebaseapp.com",
  databaseURL: "https://react-51600-mestaesparza-default-rtdb.firebaseio.com",
  projectId: "react-51600-mestaesparza",
  storageBucket: "react-51600-mestaesparza.appspot.com",
  messagingSenderId: "675969120393",
  appId: "1:675969120393:web:d476004bcbbd977b88ae58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
