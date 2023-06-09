import React, { useState } from 'react'
import {auth,googleAuthProvider} from '../config/firebase'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'

export default function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  console.log(auth?.currentUser?.email)

  const signIn = async() => {
    try {
      await createUserWithEmailAndPassword(auth,email,password);
    } catch (err) {
      console.log(err)
    }
  };

  const signInWithGoogle = async() => {
    try {
      await signInWithPopup(auth,googleAuthProvider);
    } catch (err) {
      console.log(err)
    }
  };

  const logOut = async() => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <input type='email' placeholder='Email...' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={signIn}>SignIn</button>
      <button onClick={signInWithGoogle}>SignInWithGoogle</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  )
}
