// useFirebase.ts
import { app, auth, db } from '../clients/firebaseClient';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

type FirebaseServices = {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
};

const useFirebase = (): FirebaseServices => {
    return {
        app,
        auth,
        db,
    };
};

export default useFirebase;
