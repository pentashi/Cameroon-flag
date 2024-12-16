// the grind never ends sok

import React, { useState, useEffect } from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());

        }, 1000);
        
        return () => {
            clearInterval(intervalId)

        }

    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        
        const seconds = time.getSeconds();
        const meridien = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`;
        


    }
    
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <>
            <div className="container">
            <h1 className='heading'>Zana Clock</h1>
            <div className="clock-container">
                
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
                </div>
                </div>
        </>
    )
}
export default DigitalClock  