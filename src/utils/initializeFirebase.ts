import firebase from "firebase";
import "firebase/auth";

export const initializeFirebase = (): void => {
  if (firebase.app.length > 0) {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messageSenderId: process.env.MESSAGE_SENDER_ID,
      appId: process.env.APP_ID,
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }
};
