// https://firebase.google.com/docs/auth/web/google-signin

import { useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../functions/firebase"
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const GoogleLogin = () => {
   const firebase = initializeApp(firebaseConfig)
   const provider = new GoogleAuthProvider()
   const auth = getAuth(firebase)

   const [isLoggedIn, setIsLoggedIn] = useState(false)

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            // Usuario ha iniciado sesión
            setIsLoggedIn(true)
            console.log(user)
         } else {
            // Usuario no ha iniciado sesión
            setIsLoggedIn(false)
            console.log('no usuario')
         }
      })
   }, [auth])

   const handleClick = () => {
      signInWithPopup(auth, provider)
         .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result)
            // const token = credential.accessToken
            // The signed-in user info.
            const user = result.user
            console.log(user)
            // ...
         })
         .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.customData.email
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error)
            // ...
            console.log(errorCode, errorMessage, email, credential)
         });
   };

   return (
      <div>
         {isLoggedIn
            ?
            <button className="uk-button uk-flex uk-flex-middle" onClick={() => signOut(auth)}>
               <i uk-icon="icon: sign-out"></i> 
               <span> Logout</span>  
            </button> 
            :
            <button className="uk-button uk-flex uk-flex-middle" onClick={handleClick}>
               <i uk-icon="icon: google"></i>
               <span> Login</span>   
            </button>
         }
      </div>
   )
};

export default GoogleLogin
