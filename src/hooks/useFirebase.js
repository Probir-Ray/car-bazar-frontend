import { useEffect, useState } from 'react';
import firebaseInitialize from '../Pages/Login/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


// Initialize: Firebase app
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    // User registration method.
    const userRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    // User Observer method
    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
          });
          return () => unsubscribe;
    }, []);


    // User login method
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }



    // Sign out user method
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user,
        userRegistration,
        userLogin,
        logout
    }
};

export default useFirebase;