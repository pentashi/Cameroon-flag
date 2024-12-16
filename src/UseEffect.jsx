import React,{useState,useEffect} from "react"

function UseEffect() {
    const [width, setwidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);
   
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed")
            console.log("thihs is just some random stuff")
        }
        // return () => {
        //     console.log("this is achapi")
        // }
    }, []);

    useEffect(() => {
        
        document.title = `size ${width} * ${height}`;
    },[width,height] )
    function handleResize() {
        setwidth(window.innerWidth);
        setheight(window.innerHeight);

    }
    return (
        <>
            <p>window width: {width}</p>
            <p>window height{height}</p>
            
        </>
    )
}
export default UseEffect