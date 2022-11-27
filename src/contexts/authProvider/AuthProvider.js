import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
//AuthProvider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
//Google providerLogin
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  //logOut
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    logOut,
    providerLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
