import React from 'react';
import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [compConfidens, setCompConfidens] = useState()

  return (
    <AuthContext.Provider value={{compConfidens, setCompConfidens}}>
      {children}
    </AuthContext.Provider>
  );
};