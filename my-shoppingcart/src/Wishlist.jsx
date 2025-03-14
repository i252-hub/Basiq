import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, loadWishlist, selectWishlist } from "./redux/wishlistSlice"; 
import Nav from "./Nav";
import './styles/Cart.css'
import { addToCart } from "./redux/cartSlice";
import { loadCartFromStorage } from "./redux/cartSlice";

const Wishlist = () => {
    const dispatch = useDispatch();

    const wishlist = useSelector(selectWishlist);
    useEffect(() => {
        dispatch(loadWishlist());  
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadCartFromStorage());  
    }, [dispatch]);
    

    const handleAddToCart = (item) => {
        dispatch(addToCart({ 
            id: item.id, 
            title: item.title, 
            image: item.image, 
            price: item.price,
            quantity: 1,
        }));
        dispatch(removeFromWishlist(item.id));
    };
    
    return (
        <div>
            <Nav />
            <div className="title"><h2>My Wishlist</h2></div>

            {wishlist.length === 0 ? (
                <div className="empty-cart" aria-live="polite">
                    <p>Your wishlist is empty</p>
                </div>
            ) : (
                wishlist.map((item) => (
                    <div key={item.id} className="cartItem">
                        <div className="itemCart">
                            <div className="imgContainer">
                                <img src={item.image} alt={item.title} className="cartImage" />
                            </div>
                            <div className="wishh">
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <button className="wish" aria-label={`Add ${item.title} to cart`} onClick={() => handleAddToCart(item)}>Add to cart</button>
                            </div>
                            <div className="btnDelete">
                                <button className="delete" aria-label={`Remove ${item.title} from wishlist`} onClick={() => dispatch(removeFromWishlist(item.id))}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
