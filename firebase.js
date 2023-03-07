import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBz2NQ4zL_lRB_TkNcHCLXsSVyWOhmmQiE",
    authDomain: "vortex-b5aca.firebaseapp.com",
    projectId: "vortex-b5aca",
    storageBucket: "vortex-b5aca.appspot.com",
    messagingSenderId: "173825203385",
    appId: "1:173825203385:web:71e6c091b656c9a5ad0f68",
    measurementId: "G-3LCCMWRM66",
    databaseURL: " https://vortex-b5aca-default-rtdb.firebaseio.com/ ",

  };

  export const app = initializeApp(firebaseConfig);