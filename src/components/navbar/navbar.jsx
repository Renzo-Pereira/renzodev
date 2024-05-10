import logo from "../../assets/Logo Renzo Developer.png"

const NavBar = () =>{

    return(
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Proyects</li>
                <li>Contact</li>
                <li><i class="bi bi-linkedin"></i></li>
                <li><i class="bi bi-github"></i></li>
                <li><i class="bi bi-moon-stars-fill"></i></li>
            </ul>
        </nav>
    );
}

export default NavBar;