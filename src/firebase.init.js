// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC20ysuKXumoE8k0W8PE8NbkwC5TNoYtNA",
authDomain: "table-fan-parts.firebaseapp.com",
projectId: "table-fan-parts",
storageBucket: "table-fan-parts.appspot.com",
messagingSenderId: "490454938275",
appId: "1:490454938275:web:fe9315cf0a23e05297c516"

};


// apiKey:process.env.REACT_APP_API_KEY,
// authDomain:process.env.REACT_APP_AUTH_DOMAIN,
// projectId:process.env.REACT_APP_PROJECT_ID,
// storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
// appId:process.env.REACT_APP_APP_ID,

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth