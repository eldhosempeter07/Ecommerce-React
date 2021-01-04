import './cart-item.styles.scss'

export const CartItem = ({item:{imageUrl,price,quantity,name}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className="price">
                {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}
