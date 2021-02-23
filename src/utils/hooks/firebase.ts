import { useEffect, useState } from "react";
import firebase from "firebase";
import nookies from "nookies";

export const useFirebaseAuth = (): firebase.User | undefined => {
  const [firebaseUser, setFirebaseUser] = useState<firebase.User>();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        nookies.set(null, "token", token, {});
        setFirebaseUser(user);
      } else {
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", {});
        setFirebaseUser(undefined);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return firebaseUser;
};
