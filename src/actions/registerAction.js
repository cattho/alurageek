import { userTypes } from '../types/types';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';



export const sigUpUser = (email, password) => {
    return (dispatch) => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: email })
                dispatch(synRegister(user.email, user.uid, user.displayName))
                alert('ok')
            })
            .catch(e => {
                console.log(e);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Verifica los datos ingresados',
                    showConfirmButton: false,
                    background: '#0f0e17',
                    color: '#FFFFFF',
                    timer: 2000
                })
            })
    }
}

export const synRegister = (email, password, name) => {
    return {
        type: userTypes.register,
        payload: {
            email, password, name
        }
    }
};