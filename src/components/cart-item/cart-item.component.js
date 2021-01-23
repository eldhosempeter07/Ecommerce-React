import { CartItemContainer, CartItemImage, ItemDetailsContainer, NameContainer } from './cart-item.styles'

export const CartItem = ({item:{imageUrl,price,quantity,name}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item'/>
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <span>
                {quantity} x ${price}
                </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}
