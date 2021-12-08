import {createAction, createReducer, createSelector} from "@reduxjs/toolkit";
import {IProduct} from "../../models/product";
import {withPrefix} from "../utils";
import {RootState} from "../types";

interface CartItem {
    product: IProduct;
    count: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

const getActionName = withPrefix('CART');
export const addToCart = createAction<IProduct>(getActionName('addToCart'));
export const removeFromCart = createAction<string>(getActionName('removeFromCart'));
export const removeAllFromCart = createAction(getActionName('removeAllFromCart'));

export const cartReducer = createReducer(initialState, builder => {
    builder
        .addCase(addToCart, (state, action) => {
            const existing = state.items.find(v => v.product.uuid === action.payload.uuid);
            if (existing) {
                existing.count++;
            } else {
                state.items.push({
                    product: action.payload,
                    count: 1,
                })
            }
        })
        .addCase(removeFromCart, (state, action) => {
            const item = state.items.find(v => v.product.uuid === action.payload);

            if (!item) {
                return;
            }

            if (item.count > 1) {
                item.count--;
            } else {
                state.items = state.items.filter(v => v.product.uuid !== action.payload);
            }
        })
        .addCase(removeAllFromCart, (state) => {
            state.items = [];
        })
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = createSelector(selectCart, (cart) => cart.items);
export const selectCartItemsCount = createSelector(
    selectCartItems,
    (items) => items.reduce((acc, item) => acc + item.count, 0)
);
export const selectCartTotalPrice = createSelector(
    selectCartItems,
    (items) => items.reduce((acc, item) => {
        const summaryPrice = item.product.price * item.count;
        return acc + summaryPrice;
    }, 0).toFixed(2)
);