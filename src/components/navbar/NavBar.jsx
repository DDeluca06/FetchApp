import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;