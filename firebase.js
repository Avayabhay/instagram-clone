// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9pDBGJ6AOqLosdnzdajG1epXZK2ilsYI',
  authDomain: 'insta-clone-ca65f.firebaseapp.com',
  projectId: 'insta-clone-ca65f',
  storageBucket: 'insta-clone-ca65f.appspot.com',
  messagingSenderId: '212869542497',
  appId: '1:212869542497:web:463b7d6db14f4d2479b020',
  measurementId: 'G-89BBP0ESHM',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
const analytics = getAnalytics(app)

export { app, db, storage }
