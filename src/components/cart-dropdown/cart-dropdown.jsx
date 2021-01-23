import { connect } from 'react-redux';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { CartDropdownButton, CartDropdownContainer, CartItemContainer, EmptyMessageContainer } from './cart-dropdown.styles';

const CartDropdown = ({cartItems,history,toggleCartHidden}) => {
    return (
        <CartDropdownContainer>
            <CartItemContainer>
                {cartItems.length ? 
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item ={cartItem} />)
                :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemContainer>
                <CartDropdownButton 
                    onClick={()=>{
                        history.push('/checkout');
                        toggleCartHidden();
                    }}
                >
                 GO TO CHECKOUT
                </CartDropdownButton>
        </CartDropdownContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (CartDropdown))


