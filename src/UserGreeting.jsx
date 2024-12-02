import ProptTypes from 'prop-types'
function UserGreeting(props) {
    

    const welcomeMessage = <h1 className="welcome-message">Welcome {props.username}</h1>
    const loginprompt = <h1 className="login-prompt"> Please login to continue</h1>

    
    return (props.isLoggedIn ? welcomeMessage : loginprompt
    )

    UserGreeting.proptypes = {
        
        isLoggedIn: PropTypes.bool,
        username: PropTypes.string,
    }
    UserGreeting.defaultProps = {
        isLoggedIn:false,
        username:"guest"
    }
}
export default UserGreeting