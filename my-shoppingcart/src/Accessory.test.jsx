import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Needed for <Link>
import { vi } from "vitest";
import Accesory from "./Accessory";

describe("Accesory Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();  
  });

  it("renders the heading after timeout", async () => {
    render(
      <BrowserRouter>
        <Accesory />
      </BrowserRouter>
    );


    expect(screen.queryByText("Accessories")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Accessories")).toBeInTheDocument();
    });
  });

  it("renders products correctly when API fetch succeeds", async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, category: "jewelery", image: "img1.jpg", title: "Ring" },
            { id: 2, category: "jewelery", image: "img2.jpg", title: "Necklace" },
            { id: 3, category: "jewelery", image: "img3.jpg", title: "Bracelet" },
          ]),
      })
    );

    render(
      <BrowserRouter>
        <Accesory />
      </BrowserRouter>
    );


   

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products", { mode: "cors" });
  });

  it("displays an error message when API fetch fails", async () => {

    global.fetch = vi.fn(() => Promise.reject());

    render(
      <BrowserRouter>
        <Accesory />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No products found")).toBeInTheDocument();
    });
  });

  it("renders an empty state when no products match the filter", async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, category: "men's clothing" }]),
      })
    );

    render(
      <BrowserRouter>
        <Accesory />
      </BrowserRouter>
    );


    await waitFor(() => {
      expect(screen.queryByAltText("Ring")).not.toBeInTheDocument();
    });
  });
});
