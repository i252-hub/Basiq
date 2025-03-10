import './styles/Cart.css';
import Nav from './Nav';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { removeFromCart, calculateTotal, revertTotal, loadCartFromStorage, syncCartToStorage } from "./redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice, payStatus } = useSelector(state => state.cart);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/signin");
        }
    }, [user, navigate])

    useEffect(() => {
        dispatch(loadCartFromStorage());  
    }, [dispatch]);

    useEffect(() => {
        dispatch(syncCartToStorage());  
    }, [cart, totalPrice, payStatus, dispatch]);
    
    useEffect(() => {
        if (cart.length === 0) {
            dispatch(revertTotal());
        } else {
            dispatch(calculateTotal()); 
        }
    }, [cart, dispatch]);
    

    return (
            <div>
            <Nav />
            <div className="title"><h2>Shopping Cart</h2></div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                </div>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cartItem">
                        <div className="itemCart">
                            <div className="imgContainer">
                                <img src={item.image} alt={item.title} className="cartImage" />
                            </div>
                            <Link className="cartz" to={`/productinfo/${item.id}`}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </Link>
                            <div className="btnDelete">
                                <button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}

            {totalPrice !== null && (
                <div className="totalPrice">
                    <p className="price">Total Price: ${totalPrice}</p>
                </div>
            )}

            {cart.length > 0 && (
                <div className='checkoutContainer'>
                    {!totalPrice ? (
                        <button onClick={() => dispatch(calculateTotal())} className="checkout">
                            {payStatus}
                        </button>
                    ) : (
                        <>
                            <button onClick={() => dispatch(revertTotal())} className="cancelBtn">
                                Cancel
                            </button>
                            <button onClick={() => dispatch(calculateTotal())} className="checkout">
                                {payStatus}
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>

       
    );
};

export default Cart;
