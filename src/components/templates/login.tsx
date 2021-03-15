import React, { FC, useEffect, useRef } from "react";
import { auth as firebaseui } from "firebaseui";
import firebase, { auth } from "../../utils/initializeFirebase";

const Login: FC = () => {
  const authUi = useRef(new firebaseui.AuthUI(auth));
  const authUiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ui = authUi.current;
    const authUiEl = authUiRef.current;
    if (!authUiEl) {
      return undefined;
    }
    ui.start(authUiEl, {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "JP",
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    });
    return () => {
      ui.delete();
    };
  }, []);

  return <div ref={authUiRef} />;
};

export default Login;
