import { connect } from 'react-redux';
import { CustomButton } from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

import React from 'react'
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                {cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item ={cartItem} />)}

            </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>   
        </div>
    );
}

const mapStateToProps = (state) =>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps) (CartDropdown)


