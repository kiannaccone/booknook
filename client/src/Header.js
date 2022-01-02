import logo from "./logo.png"

function Header({user}){
    
    return(
    <div id="header">
        <h1>BookNook</h1> 
        <img src= {logo} />
        <img src={user.avatar}/> 
        <h2>Welcome, {user.username}</h2>
    </div>
    )
}

export default Header;