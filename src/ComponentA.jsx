import React,{useState,useEffect, useContext, createContext } from "react";
import ComponentB from "./ComponentB"
export const UserContext = createContext();

function ComponentA() {
    



    const [myval, setUser] = useState("Achapi pentashi");

    return (
        
        <>
            <div className="box">
                <h1>ComponentA  </h1>
            <h1>{`hello ${myval}`} </h1>
            <UserContext.Provider value={myval}>
                <ComponentB myval={myval}/>
                </UserContext.Provider>
                </div>
        </>
    )
        
}
export default ComponentA