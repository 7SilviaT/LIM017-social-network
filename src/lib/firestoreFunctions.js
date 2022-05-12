/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import {
  collection, addDoc, onSnapshot, deleteDoc, doc,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

export const saveTask = (description, author, createdAt) => addDoc(collection(db, 'tasks'), { description, author, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(collection(db, 'tasks'), (callback));
export const deletePost = (id) => deleteDoc(doc(db, 'tasks', id));
