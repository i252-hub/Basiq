import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/Products.css';
import Nav from "./Nav";
import Icon from '@mdi/react';
import { mdiMinus } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { useCart } from "./useCart";



const ProductInfo = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addedCart, setAddedCart] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { cart, setCart } = useCart();
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
       
        const itemIndex = cart.findIndex((item) => item.id === productDetail.id);
        if (itemIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, productAdded]);
        }
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
          <h2>{productDetail.title}</h2>
          <div className="PriceContainer">
          <div className="QtyContainer">
            <button className="add" onClick={RemoveQuantityChange}><Icon path={mdiMinus} size={0.5}/></button>
            <p>Quantity: {quantity}</p>
            <button className="subtr"onClick={AddQuantityChange}><Icon path={mdiPlus} size={0.5} /></button>
          </div>
          <p>Price: ${(productDetail.price * quantity).toFixed(2)}</p>
          </div>
         
          <div className="desc">
          <p>{productDetail.description}</p>
          <div className="BtnCartContainer">
            <button className="BtnCart" onClick={AddedCart}>Add to Cart</button>
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