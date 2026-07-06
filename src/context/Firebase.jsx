import { createContext, useContext ,useEffect,useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut, GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { getDatabase,push ,ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsxqw9yy3hKjl8EVS9F4nUKhVISmXGCjs",
  authDomain: "grocity.firebaseapp.com",
  projectId: "grocity",
  storageBucket: "grocity.firebasestorage.app",
  messagingSenderId: "918204189019",
  appId: "1:918204189019:web:9cf814a5b83095bec6b27e",
  databaseURL: "https://grocity-default-rtdb.firebaseio.com"
};
const firebaseapp = initializeApp(firebaseConfig);
 const firebaseAuth = getAuth(firebaseapp);
const firebaseDatabase = getDatabase(firebaseapp);
const googleProvider = new GoogleAuthProvider();


const FirebasContext = createContext(null)

export const useFirebase = () => useContext(FirebasContext);

export const FirebasProvider = (props) => {

    const [user,setUser] = useState(null)

   const signupEP = (email,password) => {
      return createUserWithEmailAndPassword(firebaseAuth,email,password);
   }
   const loginEP = (email,password) => {
    return signInWithEmailAndPassword(firebaseAuth,email,password);
   }
   const signupGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider)
   }

  const logOut = async () => {
      try {
        await firebaseAuth.signOut();
        
        alert('loggin out')
        window.location.href = "/"
      } catch (error) {
        
      }
  }

   useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
        if(user) {
          setUser(user);
        }else{
          setUser(null)
        }
    })

   },[])

   const putData = (key,data) => push(ref(firebaseDatabase,key),data);


    return(
        <FirebasContext.Provider value={{signupEP,loginEP, logOut,signupGoogle ,putData,user}}>
  
          {props.children}
        </FirebasContext.Provider>
    )
}