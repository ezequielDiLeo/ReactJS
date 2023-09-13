import "./Navbar.css"
const Navbar = () => {
    return (
        <header>
            <div className="nav-container">
                <nav className="navbar">
                    <h1 className="navbar-logo">Shop</h1>
                    <ul className="navbar-list">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="/about.js">About us</a></li>
                    </ul>
                    <h2 className="seeCarrito">🛒<span>2</span></h2>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
