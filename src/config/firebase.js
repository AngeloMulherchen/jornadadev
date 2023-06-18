
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCYb90_BpibgfkymfT1J0JgenV80IrcP6c",
  authDomain: "tiktok-clone----jornada-dev.firebaseapp.com",
  projectId: "tiktok-clone----jornada-dev",
  storageBucket: "tiktok-clone----jornada-dev.appspot.com",
  messagingSenderId: "302565761608",
  appId: "1:302565761608:web:2435508d639d56f5a4ee7d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;