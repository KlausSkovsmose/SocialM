
import './register.css'
const Login = () => {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Social M</h3>
                    <span className="registerDesc">Connect with friends and the world around you</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input type="Username" placeholder="Username" className="registerInput" />
                        <input type="Email" placeholder="Email" className="registerInput" />
                        <input type="Password" placeholder="Password" className="registerInput" />
                        <input type="Password" placeholder="Confirm Password" className="registerInput" />
                        <button className="registerButton">Sign up</button>
                        <span className="registerAlreadyHaveAcc">Already have an Account?</span>
                        {/* <button className="registerRegisterButton">Create a new Account</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
