import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <img src="#" alt="logo" />
            <h1>Justusboys</h1>
        </div>
        <div className="navbar-right">
            <ul className="items-list">
                <li><a href="#about" className="navbar-link">About</a></li>
                <li><a href="#events" className="navbar-link">Events</a></li>
                <li><a href="#community" className="navbar-link">Community</a></li>
                <li><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
            <button className="join-us">Join us</button>
        </div>
    </nav>
  )
}

export default Navbar