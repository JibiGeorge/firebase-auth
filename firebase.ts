import { initializeApp } from "firebase/app";
import {
  AuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  await signInWithFireBase(googleProvider);
};

const signInWithFireBase = async (authProvider: AuthProvider) => {
  try {
    const res = await signInWithPopup(auth, authProvider);
    return res?.user;
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
  localStorage.clear();
};

export { auth, signInWithGoogle, logout };
