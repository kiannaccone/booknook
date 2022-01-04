import logo from "./logo.png"

function Header({user}){
    
    return(
    <div className="header">
        <img id="logo2" src={logo} />
        <h4>Hello, {user.username}</h4>
        <img id="avatar"src={user.avatar}/> 
    </div>
    )
}

export default Header;