/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartList: [],
    cartPrice: 0,
    cartTax: 0,
    cartQuantity: 0,
};

const updateCartQuadChanges = (state, targetProductID, price, methodChoice) => {
    const productIndex = state.cartList.findIndex(
        (product) => product.productID === targetProductID
    );
    // If the method choice is plus item, then
    // 1. Update cart quantity (+)
    // 2. Update product quantity (+)
    // 3. Update product total price (+)
    // 4. Update cart total price (+) (this is subtotal, not including tax)
    // 5. Finally update cart tax (+)

    // If the minus remove or minus item at 1, then
    // 1. Update cart total price (-)
    // 2. Update cart total quantity (-)
    // 3. Update cart tax (-)
    // 4. Finally remove product from cart (-)

    // If the method choice is minus item, then
    // 1. Update cart quantity (-)
    // 2. Update product quantity (-)
    // 3. Update product total price (-)
    // 4. Update cart total price (-) (this is subtotal, not including tax)
    // 5. Finally update cart tax (-)

    if (methodChoice === 'plus') {
        state.cartQuantity += 1;
        state.cartList[productIndex].quantity += 1;
        state.cartList[productIndex].totalPrice =
            Math.round((state.cartList[productIndex].totalPrice + price + Number.EPSILON) * 100) /
            100;
        state.cartPrice = Math.round((state.cartPrice + price + Number.EPSILON) * 100) / 100;
        state.cartTax = Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
    } else if (methodChoice === 'remove' || state.cartList[productIndex].quantity === 1) {
        state.cartPrice =
            Math.round(
                (state.cartPrice - state.cartList[productIndex].totalPrice + Number.EPSILON) * 100
            ) / 100;
        state.cartQuantity -= state.cartList[productIndex].quantity;
        state.cartTax = Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
        state.cartList.splice(productIndex, 1);
    } else {
        state.cartQuantity -= 1;
        state.cartList[productIndex].quantity -= 1;
        state.cartList[productIndex].totalPrice =
            Math.round((state.cartList[productIndex].totalPrice - price + Number.EPSILON) * 100) /
            100;
        state.cartPrice = Math.round((state.cartPrice - price + Number.EPSILON) * 100) / 100;
        state.cartTax = Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem(state, action) {
            const { productID, price } = action.payload;
            updateCartQuadChanges(state, productID, price, 'remove');
        },
        minusItem(state, action) {
            const { productID, price } = action.payload;
            updateCartQuadChanges(state, productID, price, 'minus');
        },
        plusItem(state, action) {
            const { productID, price } = action.payload;
            updateCartQuadChanges(state, productID, price, 'plus');
        },
        addItem(state, action) {
            state.cartList.push(action.payload);
            state.cartQuantity += 1;
            state.cartPrice =
                Math.round((state.cartPrice + action.payload.price + Number.EPSILON) * 100) / 100;
            state.cartTax = Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
