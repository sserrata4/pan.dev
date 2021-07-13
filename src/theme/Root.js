import React, { useEffect, useState } from "react";
import getFirebase from "../components/Firebase/auth";
import SignInScreen from "../components/Firebase/signin";

function Root({ children }) {
  const firebase = getFirebase();
  const sessionKey =
    typeof window !== "undefined"
      ? Object.keys(sessionStorage).filter((key) =>
          key.startsWith("firebase:authUser")
        )[0]
      : null;
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined" ? sessionStorage.getItem(sessionKey) : null
  );

  useEffect(() => {
    if (!firebase) return;
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, [firebase]);

  if (process.env.NODE_ENV === "development" || currentUser) {
    return <>{children}</>;
  }

  return <SignInScreen instance={firebase} />;
}

export default Root;
