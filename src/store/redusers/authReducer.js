import { AUTH, SIGN_OUT } from "../ations/auth"

const initialState = {
    isAuth: localStorage.getItem("isAuth") || false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: return {isAuth: action.value }
        case SIGN_OUT :return{isAuth:action.value}
        default: return state
    }
}

export default authReducer