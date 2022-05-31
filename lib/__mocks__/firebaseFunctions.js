// Funtions Initialization
export const initializeApp = () => ({});
export const getFirestore = () => ({});
// Functions  Authentication
export const getAuth = () => ({});
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ _id: 'get-auth', user: { email, password } }));
export const signInWithPopup = () => Promise.resolve({});
export class GoogleAuthProvider {}
// Functions Firestore
export const collection = jest.fn(() => ({}));
export const orderBy = jest.fn(() => ({}));
export const query = jest.fn(() => ({}));
export const onSnapshot = jest.fn(() => ({}));
