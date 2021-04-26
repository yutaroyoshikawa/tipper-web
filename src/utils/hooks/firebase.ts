import { useEffect } from "react";
import nookies from "nookies";
import { useDispatch } from "react-redux";
import { auth } from "../initializeFirebase";
import { appSlice } from "../../modules/app";
import { AUTH_TOKEN_KEY } from "../authToken";

export const useFirebaseAuth = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        nookies.set(null, AUTH_TOKEN_KEY.TOKEN, token.token);
        nookies.set(null, AUTH_TOKEN_KEY.EXPIRATION_TIME, token.expirationTime);
        dispatch(
          appSlice.actions.setLoginUser({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid,
            claims: token.claims,
          })
        );
      } else {
        nookies.destroy(null, AUTH_TOKEN_KEY.TOKEN);
        nookies.destroy(null, AUTH_TOKEN_KEY.EXPIRATION_TIME);
        dispatch(appSlice.actions.setLoginUser(undefined));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
