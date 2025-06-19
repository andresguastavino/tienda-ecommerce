// useFirebase.ts
import { app, auth, db, storage } from './firebaseClient';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';

type FirebaseServices = {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  storage: FirebaseStorage;
};

const useFirebase = (): FirebaseServices => {
  return {
    app,
    auth,
    db,
    storage
  };
};

export default useFirebase;
