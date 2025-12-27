import { useState, useRef } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);  
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value, isSignInForm ? "Valid Name" : name.current.value);
    setErrorMessage(message);
    if (message) return;

    //Proceed with sign in or sign up logic
    if(!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up: ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    }else{
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in: ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg" alt="background" />
      </div>
      <form onSubmit= {e => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-black border border-gray-700 rounded-lg"/>}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-black border border-gray-700 rounded-lg"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-black border border-gray-700 rounded-lg"/>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix ? Sign Up now" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  )
}

export default Login
