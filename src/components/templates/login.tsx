import React, { FC, useEffect, useRef } from "react";
import { auth as firebaseui } from "firebaseui";
import { useRouter } from "next/router";
import firebase, { auth } from "../../utils/initializeFirebase";

const Login: FC = () => {
  const router = useRouter();
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
        signInSuccessWithAuthResult: () => {
          router.push("/");

          return false;
        },
      },
    });
    return () => {
      ui.delete();
    };
  }, [router]);

  return <div ref={authUiRef} />;
};

export default Login;
