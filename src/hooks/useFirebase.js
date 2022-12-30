import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user)
      console.log(user);
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      setUser(user);
    })
  },[])
  return {user,signInWithGoogle,handleSignOut}
};

export default useFirebase