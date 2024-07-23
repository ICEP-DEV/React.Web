import { Link } from "react-router-dom";


function Header() {

    return (<div id="header">
        <Link to='/'  className="nav_button">Register</Link>
        <Link to='/login' className="nav_button">Login</Link> 
        <Link to='/emloyee' className="nav_button">Employee</Link> 
    </div>)


}

export default Header;