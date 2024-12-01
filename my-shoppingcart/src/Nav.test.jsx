import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../Nav";

describe("Nav Component", () => {
  it("renders the navigation bar with links", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );


    expect(screen.getByText("Kirsten")).toBeInTheDocument();


    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();


    expect(screen.getByTestId("mdi-cart-icon")).toBeInTheDocument();
  });
});
