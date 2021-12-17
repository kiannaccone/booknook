import Login from "./Login"
import SignUp from "./SignUp"
import logo from "./logo.png"

function Welcome({onLogin}){
 
    return(

        <div>
            <h1>BookNook</h1>
            <img src={logo}/>
            <p>Welcome to BookNook! Don't have people to discuss your lastest read with? Experiencing a book hangover? BookNook is the place to talk about your favorite books. </p>
            <Login onLogin = {onLogin}/>
            <SignUp onLogin = {onLogin}/>
        </div>
    )
}

export default Welcome;