import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    cartList: [
        {
            pic: 'url(/images/products/neoguri.jpg)',
            price: 6.99,
            productID: 101,
            quantity: 1,
            title: 'Neoguri',
            unit: '5 x 3.59 oz',
            totalPrice: 6.99,
        },
        {
            pic: 'url(/images/products/shinblack.jpg)',
            price: 6.99,
            productID: 102,
            quantity: 1,
            title: 'Something2',
            unit: '5 x 3.59 oz',
            totalPrice: 7.99,
        },
        {
            pic: 'url(/images/products/migoreng.jpg)',
            price: 6.99,
            productID: 103,
            quantity: 1,
            title: 'Something3',
            unit: '5 x 3.59 oz',
            totalPrice: 8.99,
        },
    ],
    // Missing subtotal, cart total quantity, update taxes? helper function?
    cartPrice: 55.555,
    cartTax: 1.0,
};

const findProductIndex = (state, targetProductID) => {
    return state.cartList.findIndex((val) => val.productID === targetProductID);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem(state, action) {
            const productIndex = findProductIndex(current(state), action.payload);
            state.cartList.splice(productIndex, 1);
        },
        minusItem(state, action) {
            const productIndex = findProductIndex(current(state), action.payload);
            if (state.cartList[productIndex].quantity === 1) {
                state.cartList.splice(productIndex, 1);
            } else {
                state.cartList[productIndex].quantity--;
            }
        },
        plusItem(state, action) {
            const productIndex = findProductIndex(current(state), action.payload);
            state.cartList[productIndex].quantity++;
        },
        addItem(state, action) {
            state.cartList.push(action.payload);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
