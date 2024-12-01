import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "./CartProvider";
import Cart from "./Cart";
import { describe, it, expect, beforeEach, vi } from "vitest";

describe("Cart Component", () => {
  beforeEach(() => {

    vi.resetAllMocks();
    localStorage.clear();
  });

  it("renders an empty cart message", () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("renders items in the cart", () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        { id: 1, title: "Test Product", image: "test.jpg", price: 10, quantity: 2 },
      ])
    );

    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Price: $20.00")).toBeInTheDocument();
  });

  it("calculates and shows the total price", () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        { id: 1, title: "Test Product", image: "test.jpg", price: 10, quantity: 2 },
        { id: 2, title: "Another Product", image: "test2.jpg", price: 5, quantity: 1 },
      ])
    );

    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Checkout"));

    expect(screen.getByText("Total Price: $25.00")).toBeInTheDocument();
    expect(screen.getByText("Pay")).toBeInTheDocument();
  });

  it("removes an item from the cart", () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        { id: 1, title: "Test Product", image: "test.jpg", price: 10, quantity: 2 },
      ])
    );

    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
    expect(localStorage.getItem("cart")).toBeNull();
  });

  it("reverts the checkout process", () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        { id: 1, title: "Test Product", image: "test.jpg", price: 10, quantity: 2 },
      ])
    );

    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Checkout"));
    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByText("Total Price:")).toBeNull();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(localStorage.getItem("cartExtras")).toBeNull();
  });
});
