import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden,itemCount}) => {
    console.log(itemCount);
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())    
})

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
