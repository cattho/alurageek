import React from 'react'
import { Link } from 'react-router-dom'
import { sigUpUser } from '../../actions/registerAction'
import { useForm } from '../../hooks/useForm'

const RegisterUser = () => {

    // const dispatch = useDispatch()

    // const [formData, handleInputChange] = useForm({
    //     email: '',
    //     pass: ''
    // });

    // const { email, pass } = formData;

    // console.log(formData);

    // const handleRegister = (e) => {
    //     e.preventDefault();

    //     dispatch(sigUpUser(email, pass));

    // };

    return (
        <div className='login-container'>
            <h3 className='login-title'>Creemos tu usuario</h3>
            <form className='login-form' onSubmit={handleRegister}>
                <input
                    type="text"
                    className='input-login-name'
                    name='email'
                    value={email}
                    placeholder='Correo electrónico'
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    className='input-login-pass'
                    name='pass'
                    placeholder='Contraseña'
                    value={pass}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    className='input-login-pass'
                    name='confirm-pass'
                    placeholder='Confirma Contraseña'
                />

                <button className='btn-login-form'>Registrar</button>
            </form>
            <Link to='/login'>¿Ya tienes una cuenta?</Link>
        </div>
    )
}

export default RegisterUser