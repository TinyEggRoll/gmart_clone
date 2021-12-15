/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, ProductCart } from '../../types';

const initialState: Cart = {
  cartList: [
    {
      pic: '',
      price: 0,
      productID: 0,
      title: '',
      unit: '',
      totalPrice: 0,
      quantity: 0,
    },
  ],
  cartPrice: 0,
  cartTax: 0,
  cartQuantity: 0,
};

const updateCartQuadChanges = (
  state: Cart,
  targetProductID: number,
  price: number,
  methodChoice: string
) => {
  const productIndex = state.cartList.findIndex(
    (product: ProductCart) => product.productID === targetProductID
  );

  // If the method choice is plus item, then
  // 1. Update cart quantity (+)
  // 2. Update product quantity (+)
  // 3. Update product total price (+)
  // 4. Update cart total price (+) (this is subtotal, not including tax)
  // 5. Finally update cart tax (+)

  // If the method choice is remove, then
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

  // If the method is add item, then
  // 1. Push product object into cartList array.
  // 2. Update Cart quantity (+)
  // 3. Update Cart price (+)
  // 4. Finally update Cart tax (+)

  switch (methodChoice) {
    case 'plus':
      state.cartQuantity += 1;
      state.cartList[productIndex].quantity += 1;
      state.cartList[productIndex].totalPrice =
        Math.round(
          (state.cartList[productIndex].totalPrice + price + Number.EPSILON) *
            100
        ) / 100;
      state.cartPrice =
        Math.round((state.cartPrice + price + Number.EPSILON) * 100) / 100;
      state.cartTax =
        Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
      break;
    case 'remove':
      state.cartPrice =
        Math.round(
          (state.cartPrice -
            state.cartList[productIndex].totalPrice +
            Number.EPSILON) *
            100
        ) / 100;
      state.cartQuantity -= state.cartList[productIndex].quantity;
      state.cartTax =
        Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
      state.cartList.splice(productIndex, 1);
      break;
    case 'minus':
      state.cartQuantity -= 1;
      state.cartList[productIndex].quantity -= 1;
      state.cartList[productIndex].totalPrice =
        Math.round(
          (state.cartList[productIndex].totalPrice - price + Number.EPSILON) *
            100
        ) / 100;
      state.cartPrice =
        Math.round((state.cartPrice - price + Number.EPSILON) * 100) / 100;
      state.cartTax =
        Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
      break;
    default:
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem(
      state: Cart,
      action: PayloadAction<{ productID: number; price: number }>
    ) {
      const { productID, price } = action.payload;
      updateCartQuadChanges(state, productID, price, 'remove');
    },
    minusItem(
      state,
      action: PayloadAction<{ productID: number; price: number }>
    ) {
      const { productID, price } = action.payload;
      updateCartQuadChanges(state, productID, price, 'minus');
    },
    plusItem(
      state,
      action: PayloadAction<{ productID: number; price: number }>
    ) {
      const { productID, price } = action.payload;
      updateCartQuadChanges(state, productID, price, 'plus');
    },
    addItem(state, action: PayloadAction<ProductCart>) {
      state.cartList.push(action.payload);
      state.cartQuantity += 1;
      state.cartPrice =
        Math.round(
          (state.cartPrice + action.payload.price + Number.EPSILON) * 100
        ) / 100;
      state.cartTax =
        Math.round((state.cartPrice * 0.02014 + Number.EPSILON) * 100) / 100;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
