
import React,{useState} from 'react' 
function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(event) {
        setColor(event.target.value);

}
    return (
        <>
        
            <div className='color-picker-container'>
                <h1>color picker</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    
                <p>Selected color: &nbsp;<span>{color}</span></p>

                </div>
            
            </div>
            <label htmlFor="">select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </>
)
}
export default ColorPicker