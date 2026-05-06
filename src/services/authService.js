import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const API_BASE_URL = 'http://localhost:5149/api';

export const registerUser = async (name, email, password, phone) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Name: name,
            Email: email,
            Password: password,
            Phone: phone
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Erro ao salvar no banco de dados.");
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    await updateProfile(userCredential.user, {
        displayName: name
    });

    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logoutUser = () => {
  return signOut(auth);
};