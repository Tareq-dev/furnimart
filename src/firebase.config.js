import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwbDLl4XPyQRgIe_qZ06rz29Ds2h3uMxA",
  authDomain: "furnimart-58e73.firebaseapp.com",
  projectId: "furnimart-58e73",
  storageBucket: "furnimart-58e73.appspot.com",
  messagingSenderId: "154015207928",
  appId: "1:154015207928:web:12966ba9959d982492860d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
