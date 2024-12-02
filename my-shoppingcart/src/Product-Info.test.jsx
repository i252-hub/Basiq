import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";
import ProductInfo from "./ProductInfo";
import { CartProvider } from "./useCart"; 

describe("ProductInfo Component", () => {
  beforeEach(() => {
    vi.resetAllMocks(); 
  });

  it("renders loading state initially", () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/productinfo/1"]}>
          <Routes>
            <Route path="/productinfo/:id" element={<ProductInfo />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders product details when API fetch succeeds", async () => {
    const mockProduct = {
      id: 1,
      title: "Mock Product",
      image: "mock.jpg",
      price: 10.5,
      description: "Mock product description",
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProduct),
      })
    );

    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/productinfo/1"]}>
          <Routes>
            <Route path="/productinfo/:id" element={<ProductInfo />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
      expect(screen.getByText(`Price: $${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
      expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    });

    expect(screen.getByAltText(mockProduct.title)).toHaveAttribute("src", mockProduct.image);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products/1");
  });

  it("handles API errors gracefully", async () => {
    global.fetch = vi.fn(() => Promise.reject());

    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/productinfo/1"]}>
          <Routes>
            <Route path="/productinfo/:id" element={<ProductInfo />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Error loading product details")).toBeInTheDocument();
    });
  });

  it("handles quantity increase and decrease", async () => {
    const mockProduct = {
      id: 1,
      title: "Mock Product",
      image: "mock.jpg",
      price: 10.5,
      description: "Mock product description",
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProduct),
      })
    );

    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/productinfo/1"]}>
          <Routes>
            <Route path="/productinfo/:id" element={<ProductInfo />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    });

    const increaseButton = screen.getByRole("button", { name: /\+/ });
    const decreaseButton = screen.getByRole("button", { name: /-/ });

    fireEvent.click(increaseButton);
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();

    fireEvent.click(decreaseButton); 
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  it("adds product to cart", async () => {
    const mockProduct = {
      id: 1,
      title: "Mock Product",
      image: "mock.jpg",
      price: 10.5,
      description: "Mock product description",
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProduct),
      })
    );

    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/productinfo/1"]}>
          <Routes>
            <Route path="/productinfo/:id" element={<ProductInfo />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    });

    const addToCartButton = screen.getByRole("button", { name: /Add to Cart/ });
    fireEvent.click(addToCartButton);

    expect(screen.getByText("Added to cart!")).toBeInTheDocument();
  });
});
