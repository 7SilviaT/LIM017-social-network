/* eslint-disable import/no-unresolved */
// Functions Firestore
export {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
// Functions  Authentication
export {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
// Functions Initialization
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
export { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
