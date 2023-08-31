import navbarLogo from "../../assets/shared/logo.svg";
import "./NavBar.css"
export default function NavBar() {
    return (
        <div className="navbar">
            <img src={navbarLogo} alt="navbarLogo" />
            <hr />
            <div className="navheadings">
                <div><strong>00</strong> HOME</div>
                <div><strong>01</strong> DESTINATION</div>
                <div><strong>02</strong> CREW</div>
                <div><strong>03</strong> TECHNOLOGY</div>
            </div>
        </div>
    );
}