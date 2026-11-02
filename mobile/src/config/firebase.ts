import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYGGTSmM8dsOKoZ_mu3fSo4dAZP7SPDb0",
  authDomain: "personal-progress-tracke-8c819.firebaseapp.com",
  projectId: "personal-progress-tracke-8c819",
  storageBucket: "personal-progress-tracke-8c819.firebasestorage.app",
  messagingSenderId: "205559279602",
  appId: "1:205559279602:web:ab87f7cf3137194b27c56b",
  measurementId: "G-6NMH9YF7H0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;