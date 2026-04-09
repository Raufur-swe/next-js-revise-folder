import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../utils/product";
import type { IProduct } from "../type/product";
import { stat } from "fs";


interface ICartItem {
    product: IProduct;
    quantity: number;
}


interface ICartState {
    items: ICartItem[];
    products: IProduct[];
}

const initialState: ICartState = {
    items: [],
    products: PRODUCTS,
}

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addTocart: (state, action) => {
            const { product, quantity } = action.payload
            const existingItemIndex = state.items.findIndex(
                (Item) => Item.product.id === product.id
            );
            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += quantity;
            } else {
                state.items.push(
                    {
                        product, quantity
                    }
                )
            }
        }
    },
})

export default cartSlice.reducer
