import Login from "./Login"
import SignUp from "./SignUp"

function Welcome({onLogin}){
 
    return(

        <div>
            <h1>Booknook</h1>
            <Login onLogin = {onLogin}/>
            <SignUp onLogin = {onLogin}/>
        </div>
    )
}

export default Welcome;