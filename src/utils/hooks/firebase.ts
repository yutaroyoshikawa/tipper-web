import { useEffect, useState } from "react";
import firebase from "firebase/app";
import nookies from "nookies";
import { useDispatch } from "react-redux";
import { auth } from "../initializeFirebase";
import { appSlice } from "../../modules/app";

export const useFirebaseAuth = (): firebase.User | undefined => {
  const [firebaseUser, setFirebaseUser] = useState<firebase.User>();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        nookies.set(null, "token", token);
        dispatch(appSlice.actions.setAuthToken(token));
        setFirebaseUser(user);
      } else {
        nookies.destroy(null, "token");
        nookies.set(null, "token", "");
        dispatch(appSlice.actions.setAuthToken(""));
        setFirebaseUser(undefined);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return firebaseUser;
};
