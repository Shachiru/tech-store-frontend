import type {CartItem} from "../model/CartItem.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state: CartState, action: PayloadAction<ProductData>) => {      // action.payload is the product
            // Check if the item already exists in the cart
            const existingItem = state.items.find((item) => item.product.id === action.payload.id)
            if (!existingItem) {     // If it exists, increment the itemCount
                state.items.push({
                    product: action.payload,
                    itemCount: 1
                })  // add new item to the cart
            }
        },
        increaseQuantity(state: CartState, action: PayloadAction<number>) {
            const item = state.items.find((existingItem) => existingItem.product.id === action.payload) // id of the product
            if (item) {
                item.itemCount += 1     // increment the itemCount
            }
        },
        decreaseQuantity(state: CartState, action: PayloadAction<number>) {
            const item = state.items.find((existingItem) => existingItem.product.id === action.payload) // id of the product
            if (item && item.itemCount > 1) {   // if the itemCount is greater than 1
                item.itemCount -= 1     // decrement the itemCount
            } // else part handled in the UI (ModifyCart component)
        }
    }
});

export const {addItemToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;