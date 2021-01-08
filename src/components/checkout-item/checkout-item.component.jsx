import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem,clearItemFromCart,addItem,removeItem}) =>{ 
    const {name,imageUrl,quantity,price} = cartItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeItem(cartItem) } >&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addItem(cartItem) }>&#10095;</div>

        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) =>({

    clearItemFromCart :(item)=> dispatch(clearItemFromCart(item)),
    addItem:(item)=>dispatch(addItem(item)),
    removeItem:(item)=>dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)