import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; 
import { vi } from "vitest";
import Accessory from "./Accessory";


global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Golden Necklace",
          price: 50,
          rating: { rate: 4.5, count: 200 },
          category: "jewelery",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          title: "Silver Earrings",
          price: 30,
          rating: { rate: 4.0, count: 150 },
          category: "jewelery",
          image: "https://via.placeholder.com/150",
        },
      ]),
  })
);

describe("Accessory Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders accessories after API call", async () => {
    render(
      <BrowserRouter>
        <Accessory />
      </BrowserRouter>
    );

    await waitFor(() => expect(screen.getByText("ACCESSORIES`")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Golden Necklace")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Silver Earrings")).toBeInTheDocument());
  });

  test("opens sorting menu when clicking '+' button", async () => {
    render(
      <BrowserRouter>
        <Accessory />
      </BrowserRouter>
    );

    const plusIcon = screen.getByLabelText("Open sorting options");
    fireEvent.click(plusIcon);

    await waitFor(() => {
      expect(screen.getByLabelText("Price")).toBeInTheDocument();
      expect(screen.getByLabelText("Rating")).toBeInTheDocument();
      expect(screen.getByLabelText("Stock")).toBeInTheDocument();
    });
  });

  test("filters by price when checkbox is checked", async () => {
    render(
      <BrowserRouter>
        <Accessory />
      </BrowserRouter>
    );

    const plusIcon = screen.getByLabelText("Open sorting options");
    fireEvent.click(plusIcon);

    const priceCheckbox = screen.getByLabelText("Price");
    fireEvent.click(priceCheckbox);

    await waitFor(() => {
      const products = screen.getAllByRole("img");
      expect(products[0]).toHaveAttribute("alt", "Silver Earrings"); 
      expect(products[1]).toHaveAttribute("alt", "Golden Necklace");
    });
  });

  test("removes filter when 'X' button is clicked", async () => {
    render(
      <BrowserRouter>
        <Accessory />
      </BrowserRouter>
    );

    const plusIcon = screen.getByLabelText("Open sorting options");
    fireEvent.click(plusIcon);

    const priceCheckbox = screen.getByLabelText("Price");
    fireEvent.click(priceCheckbox);

    await waitFor(() => {
      expect(screen.getByText("PRICE")).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText("Close filter");
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText("PRICE")).not.toBeInTheDocument();
    });
  });
});
