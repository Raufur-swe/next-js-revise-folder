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
        // add to cart
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
        },
        // remove from cart
        removeCart: (state, action) => {
            const { product, quantity } = action.payload
            const existingItemIndex = state.items.findIndex(
                (Item) => Item.product.id === product.id
            );
            if(existingItemIndex === -1) return;
            const existingItem = state.items[existingItemIndex];
            if(existingItem.quantity > quantity){
                existingItem.quantity -= quantity;
            }else{
                state.items.splice(existingItemIndex , 1)
            }
        },

        // filter products
        filterProducts :(state , action)=>{
            const searchTerm = action.payload;
            state.products = PRODUCTS.filter(
                (item)=>
                    item.name.toLowerCase().includes(searchTerm) ||
                    item.category.toLowerCase().includes(searchTerm) 
            );
        }

    },
})

export const {addTocart , removeCart , filterProducts} = cartSlice.actions
export default cartSlice.reducer
