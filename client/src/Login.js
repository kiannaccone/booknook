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
            <p>Have an account? Sign in!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Username</h4>
                    <input onChange={handleChange}
                        value={user.username} type='text' placeholder='username'
                        name="username"/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input onChange={handleChange} value={user.password} type='password' placeholder='password'
                    name="password"/>
                </label>
                <button className="allbuttons">Login</button>
            </form>
        </div>
    )
}

export default Login;