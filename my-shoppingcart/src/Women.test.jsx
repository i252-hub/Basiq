import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Women from "./Women";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Dress",
          category: "women's clothing",
          image: "dress.jpg",
          price: 49.99,
          rating: { rate: 4.5, count: 10 },
        },
        {
          id: 2,
          title: "T-Shirt",
          category: "women's clothing",
          image: "tshirt.jpg",
          price: 19.99,
          rating: { rate: 3.8, count: 5 },
        },
      ]),
  })
);

describe("Women Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders women's clothing page", () => {
    render(
      <BrowserRouter>
        <Women />
      </BrowserRouter>
    );

    expect(screen.getByText(/WOMEN`S CLOTHING/i)).toBeInTheDocument();
  });

  test("fetches and displays women's clothing products", async () => {
    render(
      <BrowserRouter>
        <Women />
      </BrowserRouter>
    );

    await waitFor(() => expect(screen.getByText(/Dress/i)).toBeInTheDocument());
    await waitFor(() =>
      expect(screen.getByText(/T-Shirt/i)).toBeInTheDocument()
    );
  });

  test("sorts products by price", async () => {
    render(
      <BrowserRouter>
        <Women />
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
        <Women />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent("No products found")
    );
  });

  test("removes applied filter when clicked", async () => {
    render(
      <BrowserRouter>
        <Women />
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
