import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./CartProvider";
import Main from "./main";

describe("Main Component", () => {
  it("renders the HomePage by default", () => {
    render(
      <CartProvider>
        <Router>
          <Main />
        </Router>
      </CartProvider>
    );
    
    expect(screen.getByText("HomePage")).toBeInTheDocument(); 
  });

  it("renders the Products page when navigating to '/products'", () => {
    render(
      <CartProvider>
        <Router>
          <Main />
        </Router>
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Products")); 
    
    expect(screen.getByText("Products Page")).toBeInTheDocument(); 
  });

  it("renders ProductInfo page when navigating to '/productinfo/:id'", () => {
    render(
      <CartProvider>
        <Router>
          <Main />
        </Router>
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Product Details")); 
    
    expect(screen.getByText("Product Info")).toBeInTheDocument(); 
  });

  it("renders Cart page when navigating to '/cart'", () => {
    render(
      <CartProvider>
        <Router>
          <Main />
        </Router>
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Cart")); 

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument(); 
  });
});
