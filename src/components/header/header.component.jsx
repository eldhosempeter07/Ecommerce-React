import { Link } from "react-router-dom";
import "./header.style.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg"

export const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> Shop </Link>
                <Link className="option" to="/contact">Contact </Link>
            
            </div>
        </div>
    ) 
}
