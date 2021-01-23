import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selector'
import './checkout.styles.scss';

const CheckOut = ({cartItems,total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <h3>Product</h3>
                </div>

                <div className="header-block">
                    <h3>Description</h3>
                </div>

                <div className="header-block">
                    <h3>Quantity</h3>
                </div>

                <div className="header-block">
                    <h3>Price</h3>
                </div>
                <div className="header-block">
                    <h3>Remove</h3>
                </div>

            </div>
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem key = {cartItem.id} cartItem={cartItem} />
                    ))
                }

                <div className='total'>
                    <span>TOTAL : ${total}</span>
                </div>
                <div className="test-warning">
                 * Please use the following test credit card for Payments
                 <br/>
                 4242 4242 4242 4242 Exp: A Future date - CVV :123
                </div>
                    <StripCheckoutButton price={total}/>


        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:selectCartItemsTotal
})

export default connect(mapStateToProps) (CheckOut)
