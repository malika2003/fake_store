import React from "react";
import { addToCart } from "../store/actionCreaters/cart";
import store from "../store/store";

export const Card = ({ el }) => {
    const handleClick = () => {
        store.dispatch(addToCart(el))
    }

    return (
        <div onClick={handleClick} className="home__card">
            <div className="home__img">
                <img src={el?.image} alt="" />
            </div>
            <h2 className="home__title">{el?.title}</h2>
            <p className="home__price">{el?.price} $</p>
        </div>

    )
}