import { createSlice } from "@reduxjs/toolkit"; 


const getLocalStorageItem = (key) => {
    try {
        const item = localStorage.getItem(key);
        if (!item || item === "undefined") return []; 
        return JSON.parse(item);
    } catch (error) {
        console.error(`Error parsing ${key} from localStorage`, error);
        return [];
    }
};

const initialState = { 
    cart: getLocalStorageItem("cart"),  
    totalPrice: null, 
    payStatus: "Checkout", 
}; 

const cartSlice = createSlice({ 
    name: "cart", 
    initialState, 
    reducers: { 
        addToCart: (state, action) => { 
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id); 
            if (itemIndex >= 0) { 
                state.cart[itemIndex].quantity += action.payload.quantity; 
            } else { 
                state.cart.push(action.payload); 
            } 
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }, 
        updateCartQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity; 
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => { 
            state.cart = state.cart.filter(item => item.id !== action.payload);
            if (state.cart.length === 0) {
                state.totalPrice = 0;
            } else {
                state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart)); 
        }, 
        calculateTotal: (state) => { 
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2); 
            state.payStatus = "Pay"; 
            
        }, 
        revertTotal: (state) => { 
            state.totalPrice = null; 
            state.payStatus = "Checkout"; 
        }, 
        loadCartFromStorage: (state) => { 
            state.cart = getLocalStorageItem("cart"); 

            const savedExtras = localStorage.getItem("cartExtras"); 
            if (savedExtras) { 
                try {
                    const { totalPrice, payStatus } = JSON.parse(savedExtras); 
                    state.totalPrice = totalPrice; 
                    state.payStatus = payStatus; 
                } catch (error) {
                    console.error("Error parsing cartExtras from localStorage", error);
                }
            }
        }, 
        syncCartToStorage: (state) => { 
            localStorage.setItem("cart", JSON.stringify(state.cart)); 
            const dataToStore = { 
                totalPrice: state.totalPrice, 
                payStatus: state.payStatus, 
            }; 
            localStorage.setItem("cartExtras", JSON.stringify(dataToStore)); 
        }, 
    }, 
}); 

export const { addToCart, removeFromCart, updateCartQuantity, calculateTotal, revertTotal, loadCartFromStorage, syncCartToStorage } = cartSlice.actions; 
export default cartSlice.reducer;
