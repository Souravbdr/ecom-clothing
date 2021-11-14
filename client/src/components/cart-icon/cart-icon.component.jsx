import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';

const CartIcon = () => {

    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    return (
        <CartContainer onClick={()=> dispatch(toggleCartHidden())}>
            <ShoppingIcon />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartContainer>
    )
};

export default CartIcon;