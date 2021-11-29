
import './login.css'
const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social M</h3>
                    <span className="loginDesc">Connect with friends and the world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="Email" placeholder="Email" className="loginInput" />
                        <input type="Password" placeholder="Password"className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgotPsw">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
