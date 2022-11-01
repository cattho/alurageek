import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
        <h3 className='login-title'>Iniciar sesion</h3>
        <form className='login-form'>
            <input type="text" className='input-login-name' />
            <input type="password" className='input-login-pass' />
            <button className='btn-login-form'>Entrar</button>
        </form>
    </div>
  )
}

export default Login