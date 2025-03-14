import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import cartReducer from "./redux/cartSlice"; 
import authReducer from "./redux/authSlice";
import Cart from "./Cart";

const renderWithRedux = (preloadedState) => {
    const store = configureStore({
        reducer: {
            cart: cartReducer,
            auth: authReducer,
        },
        preloadedState,
    });

    return {
        store,
        ...render(
            <Provider store={store}>
                <MemoryRouter>
                    <Cart />
                </MemoryRouter>
            </Provider>
        ),
    };
};

describe("Cart Component", () => {
    test("renders Cart component correctly", () => {
        renderWithRedux({
            cart: {
                cart: [
                    {
                        id: 1,
                        image: "https://example.com/image.jpg",
                        title: "Test Product",
                        quantity: 2,
                        price: 10.00,
                    },
                ],
                totalPrice: 20.00,
                payStatus: "Proceed to Checkout",
            },
            auth: { user: { id: 123, name: "Test User" } },
        });

        expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
        expect(screen.getByText("Test Product")).toBeInTheDocument();
        expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
        expect(screen.getByText("Price: $20.00")).toBeInTheDocument();
    });

    test("displays empty cart message when no items are present", () => {
        renderWithRedux({
            cart: { cart: [], totalPrice: 0, payStatus: "Proceed to Checkout" },
            auth: { user: { id: 123, name: "Test User" } },
        });

        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
    });

    test("removes an item from the cart when delete button is clicked", async () => {
        const { store } = renderWithRedux({
            cart: {
                cart: [
                    { id: 1, image: "https://example.com/image.jpg", title: "Test Product", quantity: 2, price: 10.00 },
                ],
                totalPrice: 20.00,
                payStatus: "Proceed to Checkout",
            },
            auth: { user: { id: 123, name: "Test User" } },
        });

        const removeButton = screen.getByRole("button", { name: "Remove" });
        fireEvent.click(removeButton);

        expect(store.getState().cart.cart).toHaveLength(0);
    });

    test("calculates total price when checkout button is clicked", async () => {
        const { store } = renderWithRedux({
            cart: {
                cart: [{ id: 1, image: "https://example.com/image.jpg", title: "Test Product", quantity: 2, price: 10.00 }],
                totalPrice: 20.00,
                payStatus: "Proceed to Checkout",
            },
            auth: { user: { id: 123, name: "Test User" } },
        });

        const checkoutButton = screen.getByRole("button", { name: "Proceed to Checkout" });
        fireEvent.click(checkoutButton);

        expect(store.getState().cart.totalPrice).toBeGreaterThan(0);
    });

    test("reverts total price when cancel button is clicked", async () => {
        const { store } = renderWithRedux({
            cart: {
                cart: [{ id: 1, image: "https://example.com/image.jpg", title: "Test Product", quantity: 2, price: 10.00 }],
                totalPrice: 20.00,
                payStatus: "Proceed to Checkout",
            },
            auth: { user: { id: 123, name: "Test User" } },
        });

        const cancelButton = screen.getByRole("button", { name: "Cancel" });
        fireEvent.click(cancelButton);

        expect(store.getState().cart.totalPrice).toBe(0);
    });
});
