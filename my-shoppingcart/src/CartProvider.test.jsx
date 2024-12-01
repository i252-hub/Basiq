import { render, screen } from "@testing-library/react";
import { CartProvider } from "./CartProvider";
import { CartContext } from "./CartContext";
import { describe, it, expect } from "vitest";
import { useContext } from "react";


const TestConsumer = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <p data-testid="cart">{JSON.stringify(cart)}</p>
      <button
        data-testid="add-item"
        onClick={() => setCart([{ id: 1, name: "Test Item", quantity: 1 }])}
      >
        Add Item
      </button>
    </div>
  );
};

describe("CartProvider", () => {
  it("initializes with an empty cart", () => {
    render(
      <CartProvider>
        <TestConsumer />
      </CartProvider>
    );

    const cartDisplay = screen.getByTestId("cart");
    expect(cartDisplay.textContent).toBe("[]"); 
  });

  it("provides cart and setCart correctly", () => {
    render(
      <CartProvider>
        <TestConsumer />
      </CartProvider>
    );

    const addItemButton = screen.getByTestId("add-item");
    addItemButton.click(); 

    const cartDisplay = screen.getByTestId("cart");
    expect(cartDisplay.textContent).toBe(
      JSON.stringify([{ id: 1, name: "Test Item", quantity: 1 }])
    );
  });
});
