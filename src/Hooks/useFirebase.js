import { getAuth, signInWithPopup, GoogleAuthProvider ,  GithubAuthProvider , onAuthStateChanged ,  createUserWithEmailAndPassword , sendEmailVerification, FacebookAuthProvider , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.inint';


initializeAuthentication();

const useFirebase = () => {
    const [user , setUser] = useState({});
    const [error , setError] = useState('');
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();


    //google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            // console.log(result.user);
            setUser(result.user)
        })
       . catch(error => {
            setError(error.message)
        })
    }
    //email

    const handleReg = e =>{
        e.preventDefault();
        if(password.length<=8){
            setError('Password should be at least 6 characters');
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Ensure your password  has two uppercase letters');
            return;
        }
        // if(!/(?=.*[!@#$&*]) /.test(password)){
        //     setError('Ensure your password has one special case letter.');
        //     return;
        // }
        if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError(' Ensure your password has two digits.');
            return;
        }
        console.log(email , password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            // console.log(result.user);
            setUser(result.user);
            verifyEmail();
            setError("");
        })
       . catch(error => {
            setError(error.message)
        })
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result  =>{
            // console.log(result);
        })
    }
    // github
    const signInWithGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            setUser(result.user)
        })
        . catch(error => {
            setError(error.message)
        })
    }
    // facebook
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        . catch(error => {
            setError(error.message)
        })
    }

    const logout = ()=>{
        signOut(auth)
        .then( () =>{
            setUser({})
        })
    }
    useEffect(() =>{
        onAuthStateChanged(auth , user => {
                // console.log('inside', user);
                setUser(user)
        })
    } ,[])

    return{
        user ,
        error ,
        signInWithGoogle,
        signInWithGitHub ,
        signInWithFacebook,
        handleEmail,
        handlePassword,
        handleReg,
        logout
    }
}

export default useFirebase ;
