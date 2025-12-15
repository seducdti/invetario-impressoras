// firebase.js
import { initializeApp, getApps, getApp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM_O0w1wWILJh0SEQMjavN9L2gRSRnbgA",
  authDomain: "inventario-impressoras-d9d58.firebaseapp.com",
  projectId: "inventario-impressoras-d9d58",
  storageBucket: "inventario-impressoras-d9d58.firebasestorage.app",
  messagingSenderId: "71103195224",
  appId: "1:71103195224:web:769d4e39ab8a76a042822d",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
