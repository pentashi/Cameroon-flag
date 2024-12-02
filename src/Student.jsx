import PropTypes from 'prop-types'
function Student(props) {
    return (
        <div className="student">

            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student :{props.isStudent ? "yes" : "no"}</p>
            <p>Height:{props.height}</p>
            <p>{typeof (props.age)}</p>
        </div>
        
       
    )
    Student.propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        isStudent: PropTypes.bool,
    }
    Student.defaultProps = {
        name: "achapi pentashi",
        age: 29,
        isStudent: false,
        height: "175cm"
    }
    

}
export default Student