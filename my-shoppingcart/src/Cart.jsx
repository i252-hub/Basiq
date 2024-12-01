import { useCart } from "./useCart";
import './styles/Cart.css';
import Nav from './Nav'
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { Link } from "react-router-dom";
import {useState, useEffect } from "react";


const Cart = () => {
    const { cart, setCart } = useCart();
    const [showtotal, setShowTotal] = useState(null);
    const [pay, setPay] = useState('Checkout');
    const [showCancel, setShowCancel] = useState(true);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        const savedExtras = localStorage.getItem("cartExtras");
    if (savedExtras) {
        const { totalPrice, payStatus } = JSON.parse(savedExtras);
        setShowTotal(totalPrice);   
        setPay(payStatus);          
    }
    }, [setCart]);


    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.removeItem("cart");
        }
    }, [cart]);


    const HandleDelete = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const TotalPrice = () =>{
        const totalprice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2); 
        setShowTotal(totalprice);
        setPay('Pay');
        setShowCancel(true);

        const dataToStore = {
            totalPrice: totalprice,
            payStatus: 'Pay'
        };
        localStorage.setItem("cartExtras", JSON.stringify(dataToStore));
       }
 
       const Revert = () => {
        setShowTotal(null);
        setPay('Checkout');
        localStorage.removeItem("cartExtras");
        setShowCancel(false);
       }

 

    return (
        <div>
            <Nav />
            <div className="title"> <h2>Shopping Cart</h2></div>
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
                    <Link className="cartz"to = {`/productinfo/${item.id}`}>
                    <div>
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    </Link>
                    <div className="btnDelete">
                    <button className = "delete"onClick={() => HandleDelete(item.id)}><Icon path={mdiDelete} size={1} />
                    </button>
                  </div>
                        </div>
                    </div>
                ))
            )}
            {
                showtotal !== null && (
                    <div className="totalPrice">
                    <p className="price">Total Price: ${showtotal}</p>
                </div>
                )
            }
           
           {cart.length > 0 && (
            <div className = 'checkoutContainer'>
                {
                    !showCancel ?(
                        <button onClick= {TotalPrice}className="checkout">{pay}</button>
                    ) : (
                        <>
                        <button onClick= {Revert}className="cancelBtn">Cancel</button>
                        <button onClick= {TotalPrice}className="checkout">{pay}</button>
                        </>
                        

                    )}
                
               
            </div>
             )}
        </div>
    );
};
export default Cart;
