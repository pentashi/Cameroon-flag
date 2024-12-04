function Button() {
    
    const Greeting=(e)=> e.target.textContent="stop clicking me"
    return (
        <button onDoubleClick={(e) => Greeting(e)}>click me now </button>
    )
}
export default Button