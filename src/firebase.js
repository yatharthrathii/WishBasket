import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Google Sign-In
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success(`Welcome ${result.user.displayName}`);
    navigate("/store");
  } catch (error) {
    toast.error("Google Sign-in failed");
    console.error("Google Sign-in Error:", error);
  }
};

// Email/Password Signup
export const signupWithEmail = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Signed up successfully");
  } catch (error) {
    toast.error(error.message);
    console.error("Signup error:", error);
  }
};

// Email/Password Signin
export const loginWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // toast.success("Logged in successfully");
  } catch (error) {
    toast.error(error.message);
    console.error("Login error:", error);
  }
};

// Logout
export const logout = () =>
  signOut(auth)
    .then(() => toast.success("Signed out"))
    .catch((err) => {
      toast.error("Logout failed");
      console.error("Logout error:", err);
    });
