import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [datos, setDatos] = useState(initialState);

    const reset = () => {
        setDatos(initialState)
    };

    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    };

    return [datos, handleInputChange, reset];
}