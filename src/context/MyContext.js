// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a Provider component
export const MyProvider = ({ children }) => {
  const [language, setLanguage] = useState('Arabic');

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
