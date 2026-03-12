import { Link } from "react-router-dom";
import Button from "./Button.jsx";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/myjob">My Job</Link>
            </nav>
            <Button />
        </header>
    );
};

export default Header;