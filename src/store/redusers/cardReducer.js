import { ADD_TO_CART } from "../ations/cart"

const initialState = {
     cart: []
}

const cardReducer = (state = initialState, action) =>{
     switch (action.type) {
          case ADD_TO_CART : return {...state, cart:[...state.cart, action.value]}

          default:return state
     }
}

export default cardReducer