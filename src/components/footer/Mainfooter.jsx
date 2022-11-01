import Developer from "./Developer"

const Mainfooter = () => {
    return (
        <>
            <div className="footer-container">
                <img src="src\assets\Logo.png" alt="imagen" />
                <ul className="footer-list">
                    <li className="footer-list-item">Quienes somos</li>
                    <li className="footer-list-item">Politica de privacidad</li>
                    <li className="footer-list-item">Programa de fidelidad</li>
                    <li className="footer-list-item">Nuestras tiendas</li>
                    <li className="footer-list-item">Quiero ser franquiciado</li>
                    <li className="footer-list-item">Anuncie aqui</li>
                </ul>
                <form className="form-footer">
                    <label name='nombre' className="label-form-footer">
                        Hable con nosotros
                    </label>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" className="input-form-footer" />
                    <textarea cols="30" rows="10" placeholder="Escribe tu mensaje" className="textarea-form-footer"></textarea>
                    <button type="submit" className="form-footer-button">Enviar mensaje</button>
                </form>
            </div>
            <Developer />
        </>
    )
}

export default Mainfooter