import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const selectWishlistState = (state) => state.wishlist; 

const loadWishlistFromStorage = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
};


export const selectWishlist = createSelector(
    [selectWishlistState],
    (wishlistState) => wishlistState.wishlist || []  
);


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const itemExists = state.wishlist.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.wishlist.push(action.payload);
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist)); 
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));  
        },
        loadWishlist: (state) => {
            state.wishlist = loadWishlistFromStorage();
        }
    }
});

export const { addToWishlist, removeFromWishlist, loadWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
