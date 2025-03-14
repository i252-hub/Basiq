import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { vi } from "vitest";
import ProductInfo from "./ProductInfo";

const mockStore = configureStore([thunk]);

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 29.99,
  description: "This is a test product.",
  image: "https://via.placeholder.com/150",
  rating: { rate: 4.5 },
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProduct),
  })
);

describe("ProductInfo Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: { cart: [] },
      wishlist: { wishlist: [] },
      auth: { user: null },
    });

    fetch.mockClear();
  });

  test("renders product details after fetching", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductInfo />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText("Test Product")).toBeInTheDocument());
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("This is a test product.")).toBeInTheDocument();
  });

  test("handles adding to cart", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductInfo />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText("Test Product"));

    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    await waitFor(() => expect(screen.getByText("Added to cart!")).toBeInTheDocument());
  });

  test("handles adding to wishlist", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductInfo />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText("Test Product"));

    const addToWishlistButton = screen.getByText("Add to Wishlist");
    fireEvent.click(addToWishlistButton);


    const actions = store.getActions();
    expect(actions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "wishlist/addToWishlist" }),
      ])
    );
  });

  test("handles increasing and decreasing quantity", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductInfo />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText("Test Product"));

    const increaseButton = screen.getByLabelText("Increase quantity");
    const decreaseButton = screen.getByLabelText("Decrease quantity");
    
    fireEvent.click(increaseButton);
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  test("redirects to login when user is not logged in and tries to add to cart", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductInfo />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText("Test Product"));

    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    await waitFor(() => {
      expect(global.window.location.pathname).toBe("/signin");
    });
  });
});
