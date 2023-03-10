import { userTypes } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.userTypes) {
        case userTypes.login:
            return {
                id: action.payload.id,
                name: action.payload.name,
                login: true
            }

        case userTypes.logout:
            return {
                login: false
            }
        default:
            return state
    }
}
