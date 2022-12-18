import React from "react";


export const ListItem = ({ el }) => {
    return (
        <div className="list-item">
            <div className="list-item__img">
                <img src={el.image} alt="" />
            </div>
            <div className="list-item__info">
                <h3 className="list-item__title">{el.title}</h3>
                <p className="list-item__desc">{el.description}</p>
                <p className="list- ">{el.price} $</p>
            </div>
        </div>
    )
}