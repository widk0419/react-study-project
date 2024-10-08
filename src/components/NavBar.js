import {
    Link,
    NavLink
  } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
                <ul 
                className="navbar-nav"
                style={{flexDirection: 'row'}}
                >
                <li className="nav-item me-2">
                    <NavLink
                        activeClassName="active" 
                        className="nav-link" 
                        aria-current="page" 
                        to="/blogs">
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="active" 
                        className="nav-link" 
                        aria-current="page" 
                        to="/admin">
                        Admin
                    </NavLink>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;