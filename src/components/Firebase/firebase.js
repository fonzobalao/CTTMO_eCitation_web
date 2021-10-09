import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAKlqllBJzujRSxBfmKevydST_w2e4I9Xc",
  authDomain: "myapplication-5b65b.firebaseapp.com",
  databaseURL: "https://myapplication-5b65b.firebaseio.com",
  projectId: "myapplication-5b65b",
  storageBucket: "myapplication-5b65b.appspot.com",
  messagingSenderId: "658711544851",
  appId: "1:658711544851:web:e9bf7834b4281917d9abe6"
};

//Initialize Firebase
firebase.initializeApp(config);

export default firebase;
