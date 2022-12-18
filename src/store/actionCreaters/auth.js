import { AUTH } from "../ations/auth"
import { SIGN_OUT } from "../ations/auth"


export const auth =(value) =>{
    localStorage.setItem("isAuth", value)
        return{
            type: AUTH,
            value :value
        }
}


export const sign_out =() =>{
    localStorage.removeItem("isAuth")
    return{
        type: AUTH,
        value:false
    }
}