import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Men from "./Men";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Jacket",
          category: "men's clothing",
          image: "jacket.jpg",
          price: 99.99,
          rating: { rate: 4.2, count: 15 },
        },
        {
          id: 2,
          title: "Jeans",
          category: "men's clothing",
          image: "jeans.jpg",
          price: 49.99,
          rating: { rate: 3.9, count: 8 },
        },
      ]),
  })
);

describe("Men Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders Men's Clothing page title", () => {
    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );

    expect(screen.getByText(/MEN`S CLOTHING/i)).toBeInTheDocument();
  });

  test("fetches and displays men's clothing products", async () => {
    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );

    await waitFor(() => expect(screen.getByText(/Jacket/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Jeans/i)).toBeInTheDocument());
  });

  test("sorts products by price", async () => {
    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );

    const sortByButton = screen.getByText(/SORT BY/i);
    userEvent.click(sortByButton);

    const priceCheckbox = screen.getByLabelText(/Price/i);
    userEvent.click(priceCheckbox);

    await waitFor(() =>
      expect(screen.getByText(/PRICE/i)).toBeInTheDocument()
    );
  });

  test("displays error message when API fails", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API Failure"));

    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent("No products found")
    );
  });

  test("removes applied filter when clicked", async () => {
    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );

    const sortByButton = screen.getByText(/SORT BY/i);
    userEvent.click(sortByButton);

    const priceCheckbox = screen.getByLabelText(/Price/i);
    userEvent.click(priceCheckbox);

    await waitFor(() =>
      expect(screen.getByText(/PRICE/i)).toBeInTheDocument()
    );

    const removePriceFilter = screen.getByLabelText("Close filter");
    userEvent.click(removePriceFilter);

    await waitFor(() =>
      expect(screen.queryByText(/PRICE/i)).not.toBeInTheDocument()
    );
  });
});
