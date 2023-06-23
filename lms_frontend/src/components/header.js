import {Link} from 'react-router-dom';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Learn Online</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/all-units">Units</Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Teacher
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/teacher-login"> LogIn</Link></li>
                            <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                            <li><Link className="dropdown-item" to="/teacher-logout">LogOut</Link></li>
                        </ul>
                    </li>
                    <a className="nav-link" href="/">Finance</a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/user-login">LogIn</Link></li>
                            <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                            <li><Link className="dropdown-item" href="/user-logout">LogOut</Link></li>
                        </ul>
                    </li>
                    <Link className="nav-link" to='/about'>About Us</Link>
                    <form className="d-flex">
                    <input
                        className="form-control me-4"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-light" type="submit">
                        Search
                    </button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
    );
  }
  
  export default Header;
  