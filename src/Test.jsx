
import PropTypes from "prop-types"


function Test(props) {
    

    return (
    
        <>
            <p className="paragraph">{props.name}</p>
            <p>{props.profession}</p>
            <p>{props.age}</p>
        </>

 
    )
    Test.defaultProps = {
        name: "Achapi pentashi",
        age: 20,
        profession: "Software Engineer",
    }

    Test.PropTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        profession:PropTypes.string, 

    }
}
export default Test