import React, { useState } from 'react'

const Form = () => {

    let [name, setName] = useState("")
    let [price, setPrice] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        setName(name);
        setPrice(price);
        price = "";
    }

    function handleName(e) {
        name = (e.target.value);
    }

    function handlePrice(e) {
        price = (e.target.value);
    }

    return (
        <div>


            <form onSubmit={handleSubmit} style={{
                border: "2px solid #ccc",
                margin: "20px auto",
                width: "400px"
            }}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleName} type="text" name="name" id='name' value={name} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input onChange={handlePrice} type="number" name="price" id='price' value={price} />
                </div>

                <button type="submit">Submit</button>
            </form>
            <div>
                <figure>
                    <h2> Name : {name} & Price: {price}</h2>
                </figure>
            </div>
        </div>
    )
}

export default Form
