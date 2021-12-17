import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom"


function NavBar({onLogout}){

    const history = useHistory();
   


    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE',
        }).then((resp) => {
            if (resp.ok) {
                onLogout(null)
            }
            history.push("/home");
        })
    }

    return(
        <div id='navbar'>
            <NavLink className='navlinks' to="/home">
                Home
            </NavLink>
            <button className="allbuttons" as={Link} to='/' onClick={handleLogOut}>
                Logout
            </button>
        </div>
    )
}

export default NavBar;