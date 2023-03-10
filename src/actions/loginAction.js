import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { userTypes } from '../types/types';

export const outLog = () => {
    return (() => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                alert('Desconectado')
            })
            .catch(e => console.log(e))
    })
}

export const loginWithEmailAndPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    syncLogin(user.uid, user.displayName),
                    alert('Logueado')
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}


export const syncLogin = (uid, displayName) => {
    return {
        type: userTypes.login,
        payload: {
            id: uid,
            name: displayName
        }
    }
}