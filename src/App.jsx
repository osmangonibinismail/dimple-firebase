import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


function App() {
 
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='App'>

      <h1>firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
      {user && <div>
        <h3>User: {user.displayName}</h3>
        <h4>email: {user.email}</h4>
        <img src={user.photoURL} alt="" />
        <h2>uid: {user.uid}</h2>
        <h5>providerId: {user.providerId}</h5>
        <h3>accessToken: {user.accessToken}</h3>
      </div>}

    </div>
  )
}

export default App;
