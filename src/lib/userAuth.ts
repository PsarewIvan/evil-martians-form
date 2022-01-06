import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from './firebase';

export const login = async (email: string, pass: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = async () => {
  signOut(auth);
};

export const register = async (email: string, pass: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    return {
      isOk: true,
      message: 'ok',
    };
  } catch (error: any) {
    let errorMessage = 'An undefined Error happened.';
    switch (error.code) {
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters';
    }
    return { isOk: false, message: errorMessage };
  }
};
