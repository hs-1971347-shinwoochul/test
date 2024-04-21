import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrmk_FOG2J8aMIfZfmXkw5GMNSWdrTTvQ",
  authDomain: "asdf-817ea.firebaseapp.com",
  databaseURL: "https://asdf-817ea-default-rtdb.firebaseio.com",
  projectId: "asdf-817ea",
  storageBucket: "asdf-817ea.appspot.com",
  messagingSenderId: "173897686833",
  appId: "1:173897686833:web:3df7523e55f29e058f9a10"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default app;

export {db};