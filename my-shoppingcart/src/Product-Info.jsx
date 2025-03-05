import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/Products.css';
import Nav from "./Nav";
import Icon from '@mdi/react';
import { mdiMinus } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartQuantity } from "./redux/cartSlice";
import { addToWishlist } from "./redux/wishlistSlice"; 


const ProductInfo = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addedCart, setAddedCart] = useState('');
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const wishlist = useSelector((state) => state.wishlist.wishlist);

function handleAddToWishlist() {
    const productAdded = {
        id: productDetail.id,
        image: productDetail.image,
        title: productDetail.title,
        price: productDetail.price
    };

    const isAlreadyInWishlist = wishlist.some(item => item.id === productDetail.id);
    if (!isAlreadyInWishlist) {
        dispatch(addToWishlist(productAdded)); 
    }
}

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setProductDetail(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, [id]); 

      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart.cart)); 
    }, [cart.cart]); 
    

      function AddedCart(){
        setAddedCart('Added to cart!');
        setTimeout(() => setAddedCart(''), 1000);
        
        const productAdded = {
            id: productDetail.id,
            image: productDetail.image,
            title: productDetail.title,
            price: productDetail.price,
            quantity: quantity
        }
       
        const itemIndex = cart.cart.findIndex((item) => item.id === productDetail.id); 

        if (itemIndex >= 0) {
          dispatch(updateCartQuantity({ id: productDetail.id, quantity: cart.cart[itemIndex].quantity + quantity }));
      } else {
          dispatch(addToCart(productAdded));
      }
        localStorage.setItem("cart", JSON.stringify(cart.cart));
      }
      function AddQuantityChange() {
        setQuantity((prevQuantity) => prevQuantity + 1); 
        }
      function RemoveQuantityChange() {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));            }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;
  return (
  <div>
    <Nav />
    <div className="productDetail">
      {productDetail ? (
        <>
          <img src={productDetail.image} alt={productDetail.title} className="productinfo" />
          <div className="product-title-container" >
          <h2 className="product-title">{productDetail.title}</h2>
          </div>
          <div className="QtyContainer">
            <button className="add" onClick={RemoveQuantityChange}><Icon path={mdiMinus} size={0.5}/></button>
            <p>Quantity: {quantity}</p>
            <button className="subtr"onClick={AddQuantityChange}><Icon path={mdiPlus} size={0.5} /></button>
          </div>
          <div className="PriceContainer">
          <p>Price: ${(productDetail.price * quantity).toFixed(2)}</p>
          </div>
         
          <div className="desc">
          <p>{productDetail.description}</p>
          <div className="buttoncon">
          <div className="BtnWishListContainer">
            <button className="BtnCart" onClick={handleAddToWishlist}>Add to Wishlist</button>
          </div>
          <div className="BtnCartContainer">
            <button className="BtnCart" onClick={AddedCart}>Add to Cart</button>
          </div>
          </div>
          <div className="txt">
          {addedCart && <p>{addedCart}</p>}
          </div>
          </div>
         
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
    </div>

  );
};



export default ProductInfo;