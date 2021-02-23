import firebase from "firebase";
import "firebase/auth";

export const initializeFirebase = (): void => {
  if (firebase.app.length > 0) {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messageSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }
};
