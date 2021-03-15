import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const Login = dynamic(() => import("../src/components/templates/login"), {
  ssr: false,
});

const LoginPage: NextPage = () => <>{process.browser && <Login />}</>;

export default LoginPage;
