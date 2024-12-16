import ComponentD from "./ComponentD"
import { useContext } from "react"
import { UserContext } from "./ComponentA"
function ComponentC() {
    
    const worked = useContext(UserContext);


    return (
        
        <>
            <div className="box">
                
                <h1>ComponentC</h1>
                <h2>{`component c says hello again ${worked}`}</h2>
                <ComponentD/>
        </div>
        </>
    )
}
export default ComponentC 