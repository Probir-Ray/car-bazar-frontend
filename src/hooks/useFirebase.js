import { useEffect, useState } from 'react';
import firebaseInitialize from '../Pages/Login/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


// Initialize: Firebase app
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    // User registration method.
    const userRegistration = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);
            
            // new user store in database
            saveUser(email, name);

            // After registered send name to firebase
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('./');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    // User Observer method
    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth]);


    // User login method
    const userLogin = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
      fetch(`https://desolate-gorge-65958.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])

    // Sign out user method
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
      const user = {email, displayName};
      fetch('https://desolate-gorge-65958.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return {
        user,
        isLoading,
        admin,
        authError,
        userRegistration,
        userLogin,
        logout
    }
};

export default useFirebase;