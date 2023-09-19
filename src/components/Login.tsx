import React from "react";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";

if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}

function Login() {
  // PROVIDER
  const googleProvider = new GoogleAuthProvider();
  // SIGN IN WITH GOOGLE
  const signInWithGoogle = async () => {
    console.log("working");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token + "token");
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // toast({
        //   description: "Login Successful",
        //   title: `Welcome ${user?.displayName}`,
        // });
      })
      .catch((error) => {
        console.log(error + "error");
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button
      onClick={signInWithGoogle}
      className="rounded-3xl py-2 px-10 border-[1px]  "
    >
      Login
    </button>
  );
}

export default Login;
