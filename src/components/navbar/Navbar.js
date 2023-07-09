import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqQe8JhxoXjy2_lve779pbB0AlaR-rm4bHA&usqp=CAU" alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="login">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;