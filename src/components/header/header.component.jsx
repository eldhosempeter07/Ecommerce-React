import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { HeaderContainer,LogoContainer,OptionLink,OptionsContainer } from "./header.styles";

const Header = ({currentUser,hidden}) => {
    
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to="/shop"> SHOP </OptionLink>
                <OptionLink className="option" to="/contact">CONTACT </OptionLink>
                {currentUser ?
                    
                    <OptionLink as='div' onClick={()=>auth.signOut()}> SIGN OUT </OptionLink>
                    :
                    <OptionLink className='option' to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown/>
            }
        </HeaderContainer>
    ) 
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
  });

export default connect(mapStateToProps)(Header)