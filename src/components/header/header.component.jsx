import { Link } from "react-router-dom";
import "./header.style.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser,hidden}) => {
    
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> Shop </Link>
                <Link className="option" to="/contact">Contact </Link>
                {currentUser ?
                    
                    <div className="option" onClick={()=>auth.signOut()}> Sign Out </div>
                    :
                    <Link to="/signin">Sign In</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
    ) 
}

const mapStateToProps = ({user:currentUser,cart:{hidden}}) => ({
    currentUser,
    hidden
  });

export default connect(mapStateToProps)(Header)