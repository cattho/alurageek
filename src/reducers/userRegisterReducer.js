import { userTypes } from "../types/types";

export const userRegisterReducer = (state = {}, action) => {
    switch (action.userTypes) {
        case userTypes.register:
            return {
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }
            default:
                return state
    }


}