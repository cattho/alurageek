import React from 'react'

const Login = () => {

  const handleInputchange = e => {
    console.log(e.target.nombre.value);
    console.log(e.target.pass.value);
    e.preventDefault();
  };

  return (
    <div className='login-container'>
      <h3 className='login-title'>Iniciar sesion</h3>
      <form className='login-form' onSubmit={handleInputchange}>
        <input type="text" className='input-login-name' name='nombre' />
        <input type="password" className='input-login-pass' name='pass' />
        <button className='btn-login-form'>Entrar</button>
      </form>
    </div>
  )
}

export default Login