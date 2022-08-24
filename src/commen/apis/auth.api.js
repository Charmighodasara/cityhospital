import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


export const signUpApi = (data) => {
    console.log("signUpApi", data);

    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "check your email" });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })
                });
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "email allready verified" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signInApi = (data) => {
    console.log("signInApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                if (user.emailVerified) {
                    console.log("signIn succesfull");
                } else {
                    console.log("please varify your email.");
                }
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                
                if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: " password was wrong." });
                } else if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "email was wrong." });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}