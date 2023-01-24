import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIrVw7de4kdSmIl4XT2zlwjhMBp3J-7EI",
  authDomain: "instagram-clone-aba12.firebaseapp.com",
  projectId: "instagram-clone-aba12",
  storageBucket: "instagram-clone-aba12.appspot.com",
  messagingSenderId: "61733034944",
  appId: "1:61733034944:web:e41f3aa68b20c4e1884625",
};

//   initialize firebase into the app by passing the config
const firebaseInit = Firebase.initializeApp(firebaseConfig);

//   Get value from firebase service, it could be from store or from auth
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebaseInit);

export { firebaseInit, FieldValue };
