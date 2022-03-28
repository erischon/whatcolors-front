import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFyXukvMQ1XV3-drQ70qT9eZtl09_hl6I",
    authDomain: "whatcolors-76fe9.firebaseapp.com",
    projectId: "whatcolors-76fe9",
    storageBucket: "whatcolors-76fe9.appspot.com",
    messagingSenderId: "704590425027",
    appId: "1:704590425027:web:4b266567c05f519389ab76"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create Provider(s)
const googleProvider = new GoogleAuthProvider()
  
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglepopup = () => signInWithPopup(auth, googleProvider)
