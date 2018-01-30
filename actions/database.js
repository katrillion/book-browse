import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "book-browse-db7ff.firebaseapp.com",
  databaseURL: "https://book-browse-db7ff.firebaseio.com",
  projectId: "book-browse-db7ff",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;