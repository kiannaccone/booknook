import {useState} from 'react'

function SignUp({onLogin}){

    const [createInfo, setCreateInfo] = useState({
        email: '',
        username: '',
        password: '',
        confirmpassword: '',
        avatar: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        const userSignup = {
            email: createInfo.email,
            username: createInfo.username,
            password: createInfo.password,
            confirmpassword: createInfo.confirmpassword,
            avatar: createInfo.avatar
        }
        fetch('/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userSignup)
        })
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then((user) => onLogin(user));
                } else {
                    // handle errors
                    // resp.json().then((data) => setErrors(data.errors))
                }
            })
    }

    function handleChange(e){
        setCreateInfo((currentUserInfo) => ({
            ...currentUserInfo,
            [e.target.name]: e.target.value
        }))
    }
        
    return(
        <div id = "signup">
            <br/>
            <h3>Create an Account</h3>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    <h5>Email</h5>
                    <br/>
                    <input id="signup2" onChange={handleChange} type='text' name='email' value={createInfo.email}placeholder='email'/>
                </label>
                <label>
                    <br/>
                    <br/>
                    <h5>Username</h5>
                    <br/>
                    <input id="signup2" onChange={handleChange} name='username' type='text' value={createInfo.username} placeholder='username'/>
                </label>
                <label>
                    <br/>
                    <br/>
                    <h5>Password</h5>
                    <br/>
                    <input id="signup2" onChange={handleChange} name='password' type='password' value={createInfo.password} placeholder='password'/>
                </label>
                <label>
                    <br/>
                    <br/>
                    <h5>Comfirm Password</h5>
                    <br/>
                    <input id="signup2" onChange={handleChange} name='confirmpassword' type='password' value={createInfo.confirmpassword}  placeholder='confirm password'/>
                </label>
                <label>
                    <br/>
                    <br/>
                    <h5>Avatar</h5>
                    <br/>
                    <input id="signup2" onChange={handleChange} name='avatar' type='text' value={createInfo.avatar} placeholder='image url'/>
                </label>
                <br/>
                <br/>
                <button className="allbuttons">Create Account</button>
                <br/>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default SignUp;