import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDK4-e_ZNc95h42nKbHm9EbHn-AFIkuDRY",
  authDomain: "project-v1-36778.firebaseapp.com",
  databaseURL: "https://project-v1-36778-default-rtdb.firebaseio.com",
  projectId: "project-v1-36778",
  storageBucket: "project-v1-36778.appspot.com",
  messagingSenderId: "329789724238",
  appId: "1:329789724238:web:dcbe24594a3f542df3d51f",
  measurementId: "G-H4XL886CFP",

  //REALTIME DATABASE URL
  databaseURL: "https://project-v1-36778-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

