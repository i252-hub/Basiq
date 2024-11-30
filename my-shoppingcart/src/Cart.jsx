import { useCart } from "./useCart";

const Cart = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <p>Your cart is empty</p>;
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="cartItem">
                    <img src={item.image} alt={item.title} className="cartImage" />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
