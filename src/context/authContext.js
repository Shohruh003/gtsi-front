import React from 'react';
import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [compConfidens, setCompConfidens] = useState();
  const [searchFace, setSearchFace] = useState()
  const [userFace, setUserFace] = useState()

  return (
    <AuthContext.Provider value={{compConfidens, setCompConfidens, searchFace, setSearchFace,userFace, setUserFace}}>
      {children}
    </AuthContext.Provider>
  );
};