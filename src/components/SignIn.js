import React, {useState} from "react";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";


function SignIn(){
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

    function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        //user signed up!
        setSignUpSuccess(`You've did right, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        //ERROR!
        setSignUpSuccess(`You've done it wrong ${error.message}!`)
      });
    }

    function doSignIn(event) {
        event.preventDefault();
        const email = event.target.signinEmail.value;
        const password = event.target.signinPassword.value;
        signInWithEmailAndPassword(auth, email, password)
      
        .then((userCredential) => {
          setSignInSuccess(`You've have done it! ${userCredential.user.email}!!!!!!`)
        })
        .catch((error) =>{
          setSignInSuccess(`You've have did done it wrong!!!! ${error.message}!!!!`)
        })
    }
    function doSignOut(event) {
      signOut(auth)
        .then(() => {
          setSignOutSuccess("You've have done dit it successfully signed out!");
        })
        .catch((error)=>{
          setSignOutSuccess(`There had been dun an error ${error.message}!`)
        });
    }

  return (
    <>
    <h1>Sign Up</h1>
    {/* sign up lives here?  ? ? ? */}
    {signUpSuccess}
    <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

    <h1>Sign In</h1>
    {signInSuccess}
    <form OnSubmit={doSignIn}>
      <input
        type='text'
        name="signinEmail"
        placeholder="put ya email in" />
      <input
        type='password'
        name='signinPassword'
        placeholder='pathword'/>
        <button type='submit'>SignIn</button>  
    </form>

    <h1>Sign out</h1>
    {signOutSuccess}
    <br />
  <button onClick={doSignOut}>Sign Out</button>
    </>
  )
}

export default SignIn 