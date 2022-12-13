import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.push(action.payload);
        },
        removeFromWishlist(state, action) {
            const newArray = state.filter(item => item.id !== action.payload.id);
            return newArray;
        }
    }
});

export const { addToWishlist, removeFromWishList  } =  wishlistSlice.actions; 
export default wishlistSlice.reducer;