import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from "firebase/compat";
import { auth } from "../../Helpers/firebase";
interface AuthContextType {
  user: firebase.User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{children:React.ReactElement}> = ({ children }) => {
  const [user, setUser] = useState<firebase.User|null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log('user', user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string):Promise<boolean> => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        return false;
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
