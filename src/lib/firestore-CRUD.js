/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import {
  collection, addDoc, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

export const saveTask = (description, autor, createdAt) => addDoc(collection(db, 'tasks'), { description, autor, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(collection(db, 'tasks'), (callback));
