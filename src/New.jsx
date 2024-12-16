import { useState } from "react"


function New() {
    
    const [student, setStudent] = useState(
        {
            name: "achappi pentashi",
            age: 20,
            profession: "software Engineer"
        }
    );

    function handleChangeName(event) {
        setStudent (s=>({ ...s, name: event.target.value }))
    }
    

    function handleChangeAge(event) {
        setStudent (s=>({ ...s, age: event.target.value }))
    }


    function handleChangeProfession(event) {
        setStudent (s=>({ ...s, profession: event.target.value }))
    }




    return (
        
        <>
            <p>I am a {student.name} and i am {student.age} years old and i am a {student.profession}</p>
        
            
            <input type="text" onChange={handleChangeName} />
            <input type="number" onChange={handleChangeAge} />
            <input type="text" onChange={handleChangeProfession} />
        </>
    )

}
export default New 