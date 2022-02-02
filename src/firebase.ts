import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtq0zBTjo_DuaxEXbY93yUbLSu64Buzhc",
  authDomain: "zachs-ai-games.firebaseapp.com",
  projectId: "zachs-ai-games",
  storageBucket: "zachs-ai-games.appspot.com",
  messagingSenderId: "1026940853604",
  appId: "1:1026940853604:web:0a105c50d044cc0101ee71",
  measurementId: "G-N64TM5R7MW",
}

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
