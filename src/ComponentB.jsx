
import ComponentC from "./ComponentC"
import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentB() {
    const myval = useContext(UserContext);


    return (
        
        <>
            <div className="box">
                
                <h1>ComponentB</h1>
                <h2>{`hello again ${myval}`}</h2>
                <ComponentC />
                
        
            </div>
        </>
    )
}
export default ComponentB 