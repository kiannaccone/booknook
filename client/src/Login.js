import {useState} from 'react'

function Login({onLogin}){

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        const registeredUser= {
            username: user.username,
            password: user.password
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(registeredUser)
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => onLogin(user));
            } else {
            //   resp.json().then((data) => setErrors(data.errors));
            }
        });
    }

    function handleChange(e){
        setUser((currentInfo)=> ({
            ...currentInfo,
            [e.target.name]: e.target.value
        }))
    }
    

    return(
        <div id='login'>
            <br/>
            <h3>Login</h3>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    <h5>Username</h5>
                    <br/>
                    <input id= "login2" onChange={handleChange}
                        value={user.username} type='text' placeholder='username'
                        name="username"/>
                </label>
                <label>
                    <br/>
                    <br/>
                    <h5>Password</h5>
                    <br/>
                    <input id= "login2" onChange={handleChange} value={user.password} type='password' placeholder='password'
                    name="password"/>
                </label>
                <br/>
                <br/>
                <button className="allbuttons">Login</button>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default Login;