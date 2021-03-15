import React, { FC } from "react";
import { useFirebaseAuth } from "../../utils/hooks/firebase";

const AuthProvider: FC = ({ children }) => {
  useFirebaseAuth();

  return <>{children}</>;
};
export default AuthProvider;
