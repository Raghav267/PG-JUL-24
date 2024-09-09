import React, { useState } from 'react'
import "./Card.css"

const Card = (props) => {

    let [price, setValue] = useState(props.price);

    function handleFigure() {
        console.log("clicked")
        price += 10;
        setValue(price);

    }

    return (
        <figure className='figure' onClick={handleFigure}>
            <img src={props.img} alt={props.name} />
            <h2>Name: {props.name}</h2>
            <h2> Price : ${price}</h2>
            <h3>Click on the figure to increse the price b $10</h3>

        </figure>

    )
}

export default Card
