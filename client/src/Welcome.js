import Login from "./Login"
import SignUp from "./SignUp"
import logo from "./logo.png"

function Welcome({onLogin}){
 
    return(

        <div id= "welcome">
            <div id="logo">
            <img src={logo}/>
            </div>
            <h2>Welcome to BookNook</h2>
            <p>your personal bookclub.</p>
            <br/>
            <Login onLogin = {onLogin}/>
            <br/>
            <SignUp onLogin = {onLogin}/>
        </div>
    )
}

export default Welcome;