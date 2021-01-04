import { connect } from 'react-redux';
import { CustomButton } from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

import React from 'react'

const CartDropdown = ({cartItems}) => {
    console.log("cart",cartItems);
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>

                    <p>asd</p>

            </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>   
        </div>
    );
}

const mapStateToProps = ({cart:cartItems}) =>({
    cartItems
})

export default connect(mapStateToProps) (CartDropdown)


