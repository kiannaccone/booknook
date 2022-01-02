import Login from "./Login"
import SignUp from "./SignUp"
import logo from "./logo.png"

function Welcome({onLogin}){
 
    return(

        <div id= "welcome">
            <div id="logo">
            <img src={logo}/>
            </div>
            <h4>Welcome to BookNook</h4>
            <p>Your personal bookclub.</p>
            <Login onLogin = {onLogin}/>
            <SignUp onLogin = {onLogin}/>
        </div>
    )
}

export default Welcome;