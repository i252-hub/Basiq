import HomePage from "./HomePage";
import Products from "./Products";

const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "products",
        element: <Products />
    },
]

export default routes;
