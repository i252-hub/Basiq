import HomePage from "./HomePage";
import Products from "./Products";
import ProductInfo from "./Product-Info";
import Cart from "./Cart";

const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "products",
        element: <Products />
    },
    {
        path: "productinfo/:id",
        element: <ProductInfo />
    },
    {
        path: "cart",
        element: <Cart />
    }
]

export default routes;
