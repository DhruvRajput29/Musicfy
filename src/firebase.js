import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Remove analytics for now while developing locally
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_6XbGKrOm-4PyTdpCSr8unnxWnKT71Mg",
  authDomain: "continue-with-gogle.firebaseapp.com",
  projectId: "continue-with-gogle",
  storageBucket: "continue-with-gogle.firebasestorage.app",
  messagingSenderId: "274598678358",
  appId: "1:274598678358:web:03ee068caf3852fbedd0f7",
  measurementId: "G-61M1137E65",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;