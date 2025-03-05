import HomePage from "./HomePage";
import Products from "./Products";
import ProductInfo from "./Product-Info";
import Cart from "./Cart";
import Signup from "./Signup";
import Signin from "./Signin";
import Men from "./Men";
import Women from "./Women";
import Accessory from "./Accessory";
import Wishlist from "./Wishlist";

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
    },
    {
        path: "signup",
        element: <Signup />
    },
    {
        path: "signin",
        element: <Signin />
    },
    {
        path: "men",
        element: <Men />
    },
    {
        path: "women",
        element: <Women />
    },
    {
        path: "accessory",
        element: <Accessory />
    },
    {
        path: "wishlist",
        element: <Wishlist />
    }
]

export default routes;
