import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; 
import { vi } from "vitest";
import Men from "../Men";

describe("Men Component", () => {
  beforeEach(() => {
    vi.resetAllMocks(); 
  });

  it("renders the heading after timeout", async () => {
    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );


    expect(screen.queryByText("Men`s Clothing")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Men`s Clothing")).toBeInTheDocument();
    });
  });

  it("renders products correctly when API fetch succeeds", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, category: "men's clothing", image: "img1.jpg", title: "Shirt" },
            { id: 2, category: "men's clothing", image: "img2.jpg", title: "Pants" },
            { id: 3, category: "men's clothing", image: "img3.jpg", title: "Jacket" },
          ]),
      })
    );

    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );


    await waitFor(() => {
      expect(screen.getByAltText("Shirt")).toBeInTheDocument();
      expect(screen.getByAltText("Pants")).toBeInTheDocument();
      expect(screen.getByAltText("Jacket")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products", { mode: "cors" });
  });

  it("displays an error message when API fetch fails", async () => {
    global.fetch = vi.fn(() => Promise.reject());

    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No products found")).toBeInTheDocument();
    });
  });

  it("renders an empty state when no products match the filter", async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, category: "women's clothing" }]),
      })
    );

    render(
      <BrowserRouter>
        <Men />
      </BrowserRouter>
    );


    await waitFor(() => {
      expect(screen.queryByAltText("Shirt")).not.toBeInTheDocument();
    });
  });
});
