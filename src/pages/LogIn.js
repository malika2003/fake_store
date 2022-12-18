import axios from "axios";
import React, { useState } from "react";
import { auth } from "../store/actionCreaters/auth";
import store from "../store/store";

export const LogIn = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (e) => {
        if (e.target.type === "text") {
            setUserName(e.target.value)
        } else if (e.target.type === "password") {
            setUserName(e.target.value)
        }
    }

    const hundleSubmit = async (e) => {
        const info = JSON.stringify({
            "username": userName,
            "password": password
        });

        const config = {
            method: 'post',
            url: 'https://fakestoreapi.com/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: info
        };

        const { data } = await axios(config)
        const {token } = data

        store.dispatch(auth(token))
    }

    return (
        <section className="login">
            <div className="login__form">
                <input onInput={handleChange} type="text" className="login__inp" placeholder="username" />
                <input onInput={handleChange} type="password" className="login__inp" placeholder="password" />
                <butto onClick={hundleSubmit} className="login__btn">Log-In</butto>
            </div>
        </section>
    )
}