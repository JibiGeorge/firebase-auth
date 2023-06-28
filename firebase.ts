import { initializeApp } from "firebase/app";
import {
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
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
const githubProvider = new GithubAuthProvider();

// Handling Google Auth
const signInWithGoogle = async () => {
  await signInWithFireBase(googleProvider);
};

// Handling Github Auth
const signInWithGithub = async () => {
  await signInWithFireBase(githubProvider);
};

const signInWithFireBase = async (authProvider: AuthProvider) => {
  await signInWithPopup(auth, authProvider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      if (error.code === "auth/account-exists-with-different-credential") {
        alert(error.message);
      }
    });
};

// Handling user recaptcha and OTP sending
const sendOTP = async (phoneNumber: any) => {
  const recaptchaVerifier = await new RecaptchaVerifier("recaptcha", {}, auth);
  const confirmation = await signInWithPhoneNumber(
    auth,
    "+" + phoneNumber,
    recaptchaVerifier
  );
  return confirmation;
};

// Session clossing or logout
const logout = () => {
  signOut(auth);
  localStorage.clear();
};

export { auth, signInWithGoogle, logout, signInWithGithub, sendOTP };
