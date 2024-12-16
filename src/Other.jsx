import React, { useState } from 'react';


function Other() {
    const [students, setStudents] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState(new Date().getFullYear() - 1900);
    
    function handleAddStudent() {
        const newStudent = {
            name: studentName,
            age: studentAge
        }
        setStudents(s => [...s, newStudent])
        setStudentName("");
        setStudentAge("");


    }
    function handleChangeName(event) {
        setStudentName(event.target.value)
    }
    function handleChangeAge(event) {
        setStudentAge(event.target.value)
    }

    function handleRemoveStudent(index) {
        setStudents(s=> s.filter((_, i) => i !== index));
    }



const years="years"

    return (

        <>
            <h1>list of students</h1>

            <input type="text"  onChange={handleChangeName} />
            <input type="number" onChange={handleChangeAge}/>  
            

            <ul>{students.map((s, index) => <li key={index} onClick={()=>handleRemoveStudent(index)}>hello {s.name} i am {s.age}{years} </li>)}</ul>
            <button onClick={handleAddStudent}> add student</button>
        </>
    )

}
export default Other 