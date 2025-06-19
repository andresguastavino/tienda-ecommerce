import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB19RoZHg1Qy-L7P623KaA4a33bQSni5gc",
    authDomain: "tienda-ecommerce-f7a96.firebaseapp.com",
    projectId: "tienda-ecommerce-f7a96",
    storageBucket: "tienda-ecommerce-f7a96.firebasestorage.app",
    messagingSenderId: "249069403174",
    appId: "1:249069403174:web:3eebff450d477b97803ae7"
};

// Inicializa Firebase solo si no hay apps cargadas aún
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { app, auth, db, storage };
