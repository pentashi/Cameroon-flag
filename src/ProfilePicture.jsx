

function ProfilePicture(){

    const DisplayEvent = (name) => {
        console.log(name)
    }
    return (
        <button onClick={(name)=>DisplayEvent(name)}>click me and see</button>
    )
}
export default ProfilePicture