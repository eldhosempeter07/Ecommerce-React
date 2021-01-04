import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => {
    console.log(itemCount);
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())    
})

const mapStateToProps = (state) =>({
    itemCount:selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
