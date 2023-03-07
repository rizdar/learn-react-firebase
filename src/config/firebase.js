import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBDFQlKkFkeGofCjAzFVlNkJ-QGNmjpl3A',
  authDomain: 'learn-firebase-fc665.firebaseapp.com',
  projectId: 'learn-firebase-fc665',
  storageBucket: 'learn-firebase-fc665.appspot.com',
  messagingSenderId: '632994781113',
  appId: '1:632994781113:web:c842f33f11b9ef126ec868',
  measurementId: 'G-9M17SFNNNJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
