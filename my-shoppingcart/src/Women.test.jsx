import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Needed for <Link>
import { vi } from "vitest";
import Women from "../Women";

describe("Women Component", () => {
  beforeEach(() => {
    vi.resetAllMocks(); 
  });

  it("renders the heading after timeout", async () => {
    render(
      <BrowserRouter>
        <Women />
      </BrowserRouter>
    );

    // Heading should appear after 300ms
    expect(screen.queryByText("Women`s Clothing")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Women`s Clothing")).toBeInTheDocument();
    });
  });

  it("renders products correctly when API fetch succeeds", async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, category: "women's clothing", image: "img1.jpg", title: "Dress" },
            { id: 2, category: "women's clothing", image: "img2.jpg", title: "Blouse" },
            { id: 3, category: "women's clothing", image: "img3.jpg", title: "Skirt" },
          ]),
      })
    );

    render(
      <BrowserRouter>
        <Women />
      </BrowserRouter>
    );


    await waitFor(() => {
      expect(screen.getByAltText("Dress")).toBeInTheDocument();
      expect(screen.getByAltText("Blouse")).toBeInTheDocument();
      expect(screen.getByAltText("Skirt")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products", { mode: "cors" });
  });

  it("displays an error message when API fetch fails", async () => {

    global.fetch = vi.fn(() => Promise.reject());

    render(
      <BrowserRouter>
        <Women />
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
        <Women />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByAltText("Dress")).not.toBeInTheDocument();
    });
  });
});
