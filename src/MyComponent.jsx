import React, { useState } from 'react';



function MyComponent() {
    const [shipping, setShipping] = useState("pickup by zana")

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    
    return (
        <>
            <label > 
                pick up
                <input type="radio" value="pick up" checked={shipping==="pick up"} onChange={handleShippingChange} />
            </label>
            <label > 
                delivery
                <input type="radio" value="delivery" checked={shipping === " delivery"} onChange={handleShippingChange} />
            </label>

            <p> shipping: {shipping}</p>
        </>
    )
    
}
export default MyComponent

