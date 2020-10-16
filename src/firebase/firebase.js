import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAk-su2skaGSPHuAvxkxLoa6rj8VKjMIuo',
  authDomain: 'fir-2745d.firebaseapp.com',
  databaseURL: 'https://fir-2745d.firebaseio.com',
  projectId: 'fir-2745d',
  storageBucket: 'fir-2745d.appspot.com',
  messagingSenderId: '870920469285',
  appId: '1:870920469285:web:df5739887368b87ef538cc',
  measurementId: 'G-GCV8D7H4WZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
