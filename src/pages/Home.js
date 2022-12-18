import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";

export const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const { data } = await axios("https://fakestoreapi.com/products")
        if (data) {
            setProducts(data)
            console.log(data)
        }
    }


    return (
        <section className="home">
            <div className="container">
                <div className="home__grid">
                    {
                        products.map((el, idx) => (
                        <Card el= {el}idx={idx}  key={idx}/>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}