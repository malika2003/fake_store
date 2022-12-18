import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sign_out } from "../store/actionCreaters/auth";
import store from "../store/store";

export const Header = () =>{

    const cart = useSelector((store) => store?.cardReducer?.cart)
    const handleClick = () =>{
        store.dispatch(sign_out())
    }
    
    return(
        <header className="header">
            <div className="container header__container">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart: {cart.length}</Link>
                <Link to="/login">LogIn</Link>
                <button className="sign_out-btn" onClick={handleClick}>Sign-Out</button>
            </div>
        </header>
    )
}