import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBOHFaR6Nxi_Ey8lb3Z_8kunz0_WpAq_oE',
  authDomain: 'covac-dc6fb.firebaseapp.com',
  projectId: 'covac-dc6fb',
  storageBucket: 'covac-dc6fb.appspot.com',
  messagingSenderId: '654367849542',
  appId: '1:654367849542:web:bf2d1f450ffc9ea72b9e47',
  measurementId: 'G-Y264MHRL6L',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
