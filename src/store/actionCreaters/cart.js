import { ADD_TO_CART } from "../ations/cart";

export const addToCart = (value) => {
    return {
        type: ADD_TO_CART,
        value: value
    }
}