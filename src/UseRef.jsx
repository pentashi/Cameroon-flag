import React, { useState, useRef, useEffect } from 'react';

function UseRef() {
    
    const inputRef = useRef(null);
    const inputRef2 = useRef(null); 
    const inputRef3 = useRef(null);
    const [inputRef4,setInputRef4]= useState("achapi said");


    useEffect(() => {
        
        console.log("component rendered");
        console.log(inputRef);

    })
    function handleClick4() {
        
        setInputRef4("this is something else")
    }

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";
        
        


    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "red"; 
        


    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow"; 
        


    }
    return (
    
        <>
        <button onClick={handleClick}>click me1!</button>
        
        <input ref={inputRef} />
         <br />

            
        <button onClick={handleClick2}>click me2!</button>
        <input ref={inputRef2} />
        <br />
            <button onClick={handleClick3}>click me3!</button>
        <input ref={inputRef3} />
        <br />
            <button onClick={handleClick4}>click me4!</button>
        <input ref={inputRef4} />
        </>
)
}
export default UseRef