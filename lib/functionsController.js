/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut, collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,

} from './firebaseFunctions.js';
import { app, db } from './config.js';

export const auth = getAuth(app);
// Funciones de  Authentificación
// Función de registro

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password));

// Función de verificación de email

export const sendEmailVerificationFirebase = () => (
  sendEmailVerification(auth.currentUser));

// auth del login usuario ya registrado

export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
// auth con google
export const provider = new GoogleAuthProvider();

export const signGoogle = () => signInWithPopup(auth, provider);

// auth Log out
export const signOutFirebase = () => signOut(auth);

// Funciones de Firestore
// Función para guardar post
export const saveTask = (description, email, createdAt) => addDoc(collection(db, 'posts'), { description, email, createdAt });

// Función para tener el  post en tiempo real y que se publique de forma descendente
export const onSnapshotFb = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('createdAt', 'desc')), callback);

// Función para borrar post
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

// Función para editar post
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const editPost = (id, newPost) => {
  updateDoc(doc(db, 'posts', id), newPost);
};
