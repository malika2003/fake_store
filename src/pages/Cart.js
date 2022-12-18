import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { ListItem } from "../components/ListItem";

export const Cart = () => {
    const cart = useSelector((store) => store?.cardReducer?.cart)
    const redux = useSelector(store => store)

    return (
        <section className="cart">
            <div className="container">
                {
                    cart.map((el, idx) => (
                        <ListItem el={el} key={idx} />
                    ))
                }
                <button onClick={() =>{
                    console.log(redux)
                }} className="cart__btn">BUY</button>
            </div>
        </section>
    )
}