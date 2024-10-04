import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const auth = getAuth();

    // Check if the URL contains a sign-in link
    if (isSignInWithEmailLink(auth, window.location.href)) {
        // Prompt the user for their email if it's not stored locally
        let email = window.prompt('Please provide your email for confirmation');

        if (email) {
            signInWithEmailLink(auth, email, window.location.href)
                .then((result) => {
                    console.log('Successfully signed in:', result.user);
                    window.localStorage.removeItem('emailForSignIn');
                    alert('Successfully signed in! Welcome to Edu Campus.');
                    window.location.href = 'index.html?signInSuccess=true';
                })
                .catch((error) => {
                    console.error('Error signing in:', error);
                    alert('Error during sign-in: ' + error.message);
                });
        } else {
            alert('Email confirmation is required to sign in.');
        }
    } else {
        alert('Invalid or expired link.');
    }
});
