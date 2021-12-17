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
        <div>
            <p>Dont have an account? Create a free account</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Email</h4>
                    <input onChange={handleChange} type='text' name='email' value={createInfo.email}placeholder='email'/>
                </label>
                <label>
                    <h4>Username</h4>
                    <input onChange={handleChange} name='username' type='text' value={createInfo.username} placeholder='username'/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input onChange={handleChange} name='password' type='password' value={createInfo.password} placeholder='password'/>
                </label>
                <label>
                    <h4>Comfirm Password</h4>
                    <input onChange={handleChange} name='confirmpassword' type='password' value={createInfo.confirmpassword}  placeholder='confirm password'/>
                </label>
                <label>
                    <h4>Avatar</h4>
                    <input onChange={handleChange} name='avatar' type='text' value={createInfo.avatar} placeholder='image'/>
                </label>
                <button className="allbuttons">Create an account</button>
            </form>
        </div>
    )
}

export default SignUp;