const Formheader = () => {

    const handleInputChange = e => console.log(e.target.value);

    return (
        <form >
            <input onChange={handleInputChange} className='input-navbar' type="text" placeholder='¿Qué deseas buscar?' />
        </form>
    )
}

export default Formheader