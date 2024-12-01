import { render, screen } from "@testing-library/react";
import Products from "../Products";
import { CartProvider } from "../useCart"; 
import { BrowserRouter } from "react-router-dom";

describe("Products Component", () => {
  it("renders navigation and product sections", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </CartProvider>
    );


    expect(screen.getByRole("navigation")).toBeInTheDocument();


    expect(screen.getByText("Men")).toBeInTheDocument(); 
    expect(screen.getByText("Women")).toBeInTheDocument(); 
    expect(screen.getByText("Accessories")).toBeInTheDocument(); 
  });
});
